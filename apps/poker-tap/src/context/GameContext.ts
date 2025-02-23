import {createContext} from "react";
import type {Deck, Hand, PokerPad} from "../types/gameTypes.ts";

export interface GameState {
  chips: number;
  prevChips: number;
  hand: Hand;
  deck: Deck;
  pokerPads: PokerPad[];
}

interface GameContextType extends GameState {
  addChips: (chips: number) => void;
  buyPokerPad: () => void;
  nextPokerPadPrice: number;
  shuffleDeck: () => void;
  drawCard: (numberOfCardsToDraw?: number) => void;
  revealDeck: (deck: Deck) => void;
  toggleSelectedCard: (uid: string) => void;
  placeCardsOnTable: (index: number) => void;
  drawCardAndDeductChips: () => void;
  getTotalBonus: () => number;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);
