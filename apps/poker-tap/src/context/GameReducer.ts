import ChipsService from "../services/ChipsService.ts";
import CroupierService from "../services/CroupierService.ts";
import CursorService from "../services/CursorService.ts";
import DeckService from "../services/DeckService.ts";
import GameService from "../services/GameService.ts";
import HandService from "../services/HandService.ts";
import PokerPadService from "../services/PokerPadService.ts";
import PokerPasService from "../services/PokerPadService.ts";
import type {Action, GameState} from "./GameContext";

export const GameReducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case "ADD_CHIPS":
      return {
        ...state,
        prevChips: state.chips,
        chips: ChipsService.addChips({currentChips: state.chips, pokerPads: state.pokerPads})
      };
    case "ADD_CHIPS_BY_CROUPIERS": {
      const totalBonus = state.croupiers.reduce((acc, croupier) => acc + croupier.bonus, 0);
      return {
        ...state,
        prevChips: state.chips,
        chips: state.chips + totalBonus,
      };
    }
    case "ADD_CHIPS_BY_CURSORS": {
      const chipsFromCursors = state.cursors * 0.1;
      return {
        ...state,
        prevChips: state.chips,
        chips: state.chips + chipsFromCursors,
      };
    }
    case "BUY_POKER_PAD": {
      const cost = PokerPadService.calculatePokerPadCost(state.pokerPads.length);
      if (state.chips >= cost) {
        const newPokerPad = PokerPasService.createPokerPad(state.pokerPads.length);
        return {
          ...state,
          chips: state.chips - cost,
          pokerPads: [...state.pokerPads, newPokerPad]
        };
      }
      return state;
    }
    case 'SHUFFLE_DECK':
      return { ...state, deck: DeckService.shuffleDeck(state.deck) };
    case 'DRAW_CARD': {
      const { hand, deck } = HandService.drawCard(state.deck, state.hand, action.payload);
      return {
        ...state,
        hand: {
          ...state.hand,
          Cards: hand.Cards,
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
          Cards: HandService.toggleSelectedCard(state.hand.Cards, action.payload)
        }
      };
    case "PLACE_CARDS_ON_TABLE": {
      const { newHand, newPokerPads } = PokerPadService.placeCardsOnTable(state.hand.Cards, state.pokerPads, action.payload);

      if (newHand !== state.hand.Cards || newPokerPads !== state.pokerPads) {
        return {
          ...state,
          hand: {
            ...state.hand,
            Cards: newHand,
          },
          pokerPads: newPokerPads,
        };
      }

      return state;
    }
    case "BUY_CROUPIER": {
      const cost = CroupierService.calculateCroupierCost(state.croupiers.length);
      if (state.chips >= cost) {
        const newCroupier = CroupierService.createCroupier(state.croupiers.length);
        return {
          ...state,
          chips: state.chips - cost,
          croupiers: [...state.croupiers, newCroupier],
        };
      }
      return state;
    }
    case "BUY_CURSOR": {
      const cost = CursorService.calculateCursorCost(state.cursors);
      if (state.chips >= cost) {
        return {
          ...state,
          chips: state.chips - cost,
          cursors: state.cursors + 1,
        };
      }
      return state;
    }

    default:
      return state;
  }
};
