export type CardColor = 'spades' | 'hearts' | 'clover' | 'diamonds';

export type CardValue =
  | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
  | 'J' | 'Q' | 'K' | 'A';

export interface Card {
  color: CardColor;
  value: CardValue;
  numericValue: number;
}

export interface Hand {
  cards: Card[];
  combinationUid: string;
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
