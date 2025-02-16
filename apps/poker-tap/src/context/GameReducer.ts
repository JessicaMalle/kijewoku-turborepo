import ChipsService from "../services/ChipsService.ts";
import DeckService from "../services/DeckService.ts";
import HandService from "../services/HandService.ts";
import type { GameState } from "./GameContext";

type Action =
  | { type: "ADD_CHIPS"; payload: number }
  | { type: 'SHUFFLE_DECK' }
  | { type: 'DRAW_HAND' }

export const GameReducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case "ADD_CHIPS":
      return { ...state, chips: ChipsService.addChips(state.chips, action.payload) };
    case 'SHUFFLE_DECK':
      return { ...state, deck: DeckService.shuffleDeck(state.deck) };
    case 'DRAW_HAND': {
      const { hand: newHand, deck: newDeck } = HandService.drawHand(state.deck, state.hand.cards);

      return {
        ...state,
        hand: {
          ...state.hand,
          cards: newHand,
        },
        deck: newDeck,
      }
    }
    default:
      return state;
  }
};
