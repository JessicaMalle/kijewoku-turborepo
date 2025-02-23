import ChipsService from "../services/ChipsService.ts";
import DeckService from "../services/DeckService.ts";
import GameService from "../services/GameService.ts";
import HandService from "../services/HandService.ts";
import PokerPadService from "../services/PokerPadService.ts";
import type { GameState } from "./GameContext";

type Action =
  | { type: "ADD_CHIPS" }
  | { type: 'SHUFFLE_DECK' }
  | { type: 'TOGGLE_SELECTED_HAND_CARD'; payload: number }
  | { type: "PLACE_CARDS_ON_TABLE" }
  | { type: "DRAW_CARD", payload: number }
  | { type: "DRAW_CARD_AND_DEDUCT_CHIPS" }

export const GameReducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case "ADD_CHIPS":
      return {
        ...state,
        prevChips: state.chips,
        chips: ChipsService.addChips({currentChips: state.chips, cards: state.pokerPad.cards})
      };
    case 'SHUFFLE_DECK':
      return { ...state, deck: DeckService.shuffleDeck(state.deck) };
    case 'DRAW_CARD': {
      const { hand, deck } = HandService.drawCard(state.deck, state.hand, action.payload);
      return {
        ...state,
        hand: {
          ...state.hand,
          handCards: hand.handCards,
        },
        deck: {
          ...state.deck,
          cards: deck.cards
        }
      };
    }
    case "DRAW_CARD_AND_DEDUCT_CHIPS": {
      const { deck, hand, remainingChips } = GameService.drawCardAndDeductChips(state.deck, state.hand, state.chips);
      return {
        ...state,
        deck,
        hand,
        chips: remainingChips,
      };
    }
    case 'TOGGLE_SELECTED_HAND_CARD':
      return {
        ...state,
        hand: {
          ...state.hand,
          handCards: HandService.toggleSelectedHandCard(state.hand.handCards, action.payload)
        }
      };
    case "PLACE_CARDS_ON_TABLE": {
      const { newHand, newTable } = PokerPadService.placeCardsOnTable(state.hand.handCards, state.pokerPad.cards);

      if (newHand !== state.hand.handCards || newTable !== state.pokerPad.cards) {
        return {
          ...state,
          hand: {
            ...state.hand,
            handCards: newHand,
          },
          pokerPad: {
            ...state.pokerPad,
            cards: newTable,
          },
        };
      }

      return state;
    }

    default:
      return state;
  }
};
