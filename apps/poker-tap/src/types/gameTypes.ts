export type CardColor = 'spades' | 'hearts' | 'clover' | 'diamonds';

export type CardValue =
  | '2' | '3' | '4' | '5' | '6' | '7' | '8' | '9' | '10'
  | 'J' | 'Q' | 'K' | 'A';

export interface Card {
  color: CardColor;
  value: CardValue;
  numericValue: number;
}

export interface HandCard extends Card {
  active: boolean;
}

export interface Hand {
  handCards: HandCard[];
  firstPickMade: boolean;
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
  cards: Card[];
}
