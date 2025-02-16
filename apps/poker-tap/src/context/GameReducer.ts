import ChipsService from "../services/ChipsService.ts";
import type { GameState } from "./GameContext";

type Action =
  | { type: "ADD_CHIPS"; payload: number }
  | { type: "BUY_HAND" }
  | { type: "ADD_CLICKER_BONUS"; payload: number };

export const GameReducer = (state: GameState, action: Action): GameState => {
  switch (action.type) {
    case "ADD_CHIPS":
      return { ...state, chips: ChipsService.addChips(state.chips, action.payload) };
    case "BUY_HAND":
      return { ...state, hands: state.hands + 1 };
    case "ADD_CLICKER_BONUS":
      return { ...state, clickerBonus: state.clickerBonus + action.payload };
    default:
      return state;
  }
};
