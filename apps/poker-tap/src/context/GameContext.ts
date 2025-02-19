import {createContext} from "react";
import type {Deck, Hand} from "../types/gameTypes.ts";

export interface GameState {
  chips: number;
  hand: Hand;
  deck: Deck;
}

interface GameContextType extends GameState {
  addChips: (chips: number) => void;
  shuffleDeck: () => void;
  revealDeck: (deck: Deck) => void;
  drawHand: () => void;
  toggleSelectedHandCard: (cardIndex: number) => void;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);
