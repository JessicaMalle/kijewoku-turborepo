import {createContext} from "react";
import type {Deck} from "../types/gameTypes.ts";

export interface GameState {
  chips: number;
  deck: Deck;
}

interface GameContextType extends GameState {
  addChips: (chips: number) => void;
  shuffleDeck: () => void;
  revealDeck: (deck: Deck) => void;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);
