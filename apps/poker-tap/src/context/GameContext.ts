import {createContext} from "react";
import type {Croupier, Deck, Hand, PokerPad} from "../types/gameTypes.ts";

export interface GameState {
  chips: number;
  prevChips: number;
  hand: Hand;
  deck: Deck;
  pokerPads: PokerPad[];
  croupiers: Croupier[];
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
  buyCroupier: () => void;
}

export type Action =
  | { type: "ADD_CHIPS" }
  | { type: "BUY_POKER_PAD" }
  | { type: 'SHUFFLE_DECK' }
  | { type: 'TOGGLE_SELECTED_HAND_CARD'; payload: string }
  | { type: "PLACE_CARDS_ON_TABLE", payload: number }
  | { type: "DRAW_CARD", payload: number }
  | { type: "DRAW_CARD_AND_DEDUCT_CHIPS" }
  | { type: "BUY_CROUPIER" }
  | { type: "ADD_CHIPS_BY_CROUPIERS" }

export const GameContext = createContext<GameContextType | undefined>(undefined);
