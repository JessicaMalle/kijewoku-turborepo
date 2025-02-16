import ChipsService from "../services/ChipsService.ts";
import DeckService from "../services/DeckService.ts";
import type {Card} from "../types/gameTypes.ts";
import type { GameState } from "./GameContext";

type Action =
  | { type: "ADD_CHIPS"; payload: number }
  | { type: 'SHUFFLE_DECK' }
  | { type: 'DRAW_CARD' }
  | { type: 'PLACE_CARD_UNDER_DECK'; payload: Card };


export const GameReducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case "ADD_CHIPS":
      return { ...state, chips: ChipsService.addChips(state.chips, action.payload) };
    case 'SHUFFLE_DECK':
      return { ...state, deck: DeckService.shuffleDeck(state.deck) };
    default:
      return state;
  }
};
