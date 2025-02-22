import {createContext} from "react";
import type {Deck, Hand, PokerPad} from "../types/gameTypes.ts";

export interface GameState {
  gameInitialized: boolean;
  chips: number;
  hand: Hand;
  deck: Deck;
  pokerPad: PokerPad;
}

interface GameContextType extends GameState {
  addChips: (chips: number) => void;
  shuffleDeck: () => void;
  drawCard: (numberOfCardsToDraw?: number) => void;
  revealDeck: (deck: Deck) => void;
  toggleSelectedHandCard: (cardIndex: number) => void;
  placeCardsOnTable: () => void;
  drawCardAndDeductChips: () => void;
}

export const GameContext = createContext<GameContextType | undefined>(undefined);
