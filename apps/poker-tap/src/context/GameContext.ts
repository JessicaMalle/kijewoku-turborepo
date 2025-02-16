import {createContext} from "react";

export interface GameState {
  chips: number;
  hands: number;
  clickerBonus: number;
  addChips: (chips: number) => void;
  buyHand: () => void;
  addClickerBonus: (bonus: number) => void;
}

export const GameContext = createContext<GameState | undefined>(undefined);
