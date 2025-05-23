import { createContext } from "react";
import type { BoosterCollection, BoosterType, CardCollection, Deck, Hand, Item, PokerPad } from "../types/gameTypes.ts";

export interface GameState {
	chips: number;
	prevChips: number;
	hand: Hand;
	deck: Deck;
	pokerPad: PokerPad;
	playedPokerPads: PokerPad[];
	items: Item[];
	boosterCollection: BoosterCollection;
	cardCollection: CardCollection;
}

interface GameContextType extends GameState {
	addChips: (chips: number) => void;
	validatePokerPad: () => void;
	shuffleDeck: () => void;
	drawCard: (numberOfCardsToDraw?: number) => void;
	revealDeck: (deck: Deck) => void;
	toggleSelectedCard: (uid: string) => void;
	placeCardOnTable: (cardUid: string) => void;
	drawCardAndDeductChips: () => void;
	setDraggingCardUid: (cardUid: string) => void;
	clearDraggingCardUid: () => void;
	getTotalBonus: () => number;
	buyItem: (itemUid: string) => void;
	getItemPrice: (itemUid: string) => number;
	canBuyItem: (itemUid: string) => boolean;
	buyBooster: (type: BoosterType) => void;
	openBooster: (boosterUid: string) => void;
	getBoosterPrice: (type: BoosterType) => number;
	canBuyBooster: (type: BoosterType) => boolean;
	createDeck: (cardUids: string[]) => boolean;
	updateDeck: (cardUids: string[]) => boolean;
	canCreateDeck: (cardUids: string[]) => boolean;
}

export type Action =
	| { type: "ADD_CHIPS" }
	| { type: "VALIDATE_POKER_PAD" }
	| { type: "SHUFFLE_DECK" }
	| { type: "TOGGLE_SELECTED_HAND_CARD"; payload: string }
	| { type: "PLACE_CARD_ON_TABLE"; payload: string }
	| { type: "DRAW_CARD"; payload: number }
	| { type: "DRAW_CARD_AND_DEDUCT_CHIPS" }
	| { type: "SET_DRAGGING_CARD_UID"; payload: string }
	| { type: "SET_LAST_DRAGGING_CARD_UID"; payload: string }
	| { type: "CLEAR_DRAGGING_CARD_UID" }
	| { type: "CLEAR_LAST_DRAGGING_CARD_UID" }
	| { type: "BUY_ITEM"; payload: string }
	| { type: "AUTO_CLICK"; payload: number }
	| { type: "BUY_BOOSTER"; payload: BoosterType }
	| { type: "OPEN_BOOSTER"; payload: string }
	| { type: "CREATE_DECK"; payload: string[] }
	| { type: "UPDATE_DECK"; payload: string[] };

export const GameContext = createContext<GameContextType | undefined>(
	undefined,
);
