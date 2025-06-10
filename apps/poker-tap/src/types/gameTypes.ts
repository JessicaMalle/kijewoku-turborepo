export type SortType = "value" | "color";

export type CardColor = "spades" | "hearts" | "clover" | "diamonds";

export type CardValue =
	| "2"
	| "3"
	| "4"
	| "5"
	| "6"
	| "7"
	| "8"
	| "9"
	| "10"
	| "J"
	| "Q"
	| "K"
	| "A";

export interface Card {
	uid: string;
	color: CardColor;
	value: CardValue;
	numericValue: number;
	active?: boolean;
	isDraggable?: boolean;
}

export interface Hand {
	Cards: Card[];
	firstPickMade: boolean;
	forceOpen?: boolean;
	draggingCardUid?: string;
}

export interface Deck {
	cards: Card[];
}

export interface Booster {
	cards: Card[];
	edition: "basic"; // the first edition is called "Basic Edition"
	type: "gameCard"; // later we have to add some new type of cards in the game
	size: 3 | 5 | 7; // affect the price and/or the rarity of the booster
}

export interface Combination {
	uid: string;
	bonusValue: number;
}

export interface History {
	startDatetime: Date;
	totalChipsAcquired: number;
	totalHandsAdded: number;
	totalDealersAcquired: number;
}

export interface PokerPad {
	uid: string;
	cards: Card[];
}

export type ItemType = "CURSOR" | "CROUPIER";

export interface Item {
	uid: ItemType;
	originPrice: number;
	count: number;
}
