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

export type BoosterType = "CLASSIC";

export type CardRarity = "COMMON" | "UNCOMMON" | "RARE" | "EPIC" | "LEGENDARY";

export interface CardWithRarity extends Card {
	rarity: CardRarity;
}

export interface Booster {
	uid: string;
	type: BoosterType;
	cards: CardWithRarity[];
	opened: boolean;
}

export interface CardCollection {
	cards: CardWithRarity[];
}

export interface BoosterCollection {
	boosters: Booster[];
	purchaseCount: number;
}
