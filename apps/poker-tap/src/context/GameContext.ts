import { createContext } from "react";
import type { Croupier, Deck, Hand, PokerPad } from "../types/gameTypes.ts";

export interface GameState {
	chips: number;
	prevChips: number;
	hand: Hand;
	deck: Deck;
	pokerPads: PokerPad[];
	cursors: number;
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
	setDraggingCardUid: (cardUid: string) => void;
	setLastDraggingCardUid: (cardUid: string) => void;
	clearDraggingCardUid: () => void;
	clearLastDraggingCardUid: () => void;
	getTotalBonus: () => number;
	buyCursor: () => void;
	buyCroupier: () => void;
}

export type Action =
	| { type: "ADD_CHIPS" }
	| { type: "BUY_POKER_PAD" }
	| { type: "SHUFFLE_DECK" }
	| { type: "TOGGLE_SELECTED_HAND_CARD"; payload: string }
	| { type: "PLACE_CARDS_ON_TABLE"; payload: number }
	| { type: "DRAW_CARD"; payload: number }
	| { type: "DRAW_CARD_AND_DEDUCT_CHIPS" }
	| { type: "SET_DRAGGING_CARD_UID"; payload: string }
	| { type: "SET_LAST_DRAGGING_CARD_UID"; payload: string }
	| { type: "CLEAR_DRAGGING_CARD_UID" }
	| { type: "CLEAR_LAST_DRAGGING_CARD_UID" }
	| { type: "BUY_CURSOR" }
	| { type: "BUY_CROUPIER" }
	| { type: "ADD_CHIPS_BY_CROUPIERS" }
	| { type: "ADD_CHIPS_BY_CURSORS" };

export const GameContext = createContext<GameContextType | undefined>(
	undefined,
);
