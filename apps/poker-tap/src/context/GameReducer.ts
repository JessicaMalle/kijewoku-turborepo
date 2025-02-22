import ChipsService from "../services/ChipsService.ts";
import DeckService from "../services/DeckService.ts";
import HandService from "../services/HandService.ts";
import PokerPadService from "../services/PokerPadService.ts";
import type { GameState } from "./GameContext";

type Action =
  | { type: "ADD_CHIPS"; payload: number }
  | { type: 'SHUFFLE_DECK' }
  | { type: 'TOGGLE_SELECTED_HAND_CARD'; payload: number }
  | { type: "PLACE_CARDS_ON_TABLE" }
  | { type: "DRAW_CARD", payload: number }

export const GameReducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case "ADD_CHIPS":
      return { ...state, chips: ChipsService.addChips(state.chips, action.payload) };
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

    default:
      return state;
  }
};
