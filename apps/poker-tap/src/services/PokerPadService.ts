import type {Card, Hand, PokerPad} from "../types/gameTypes.ts";

const countEmptySlots = (table: PokerPad['cards']): number => {
  return 5 - table.length;
}

const canHoldSelectedCards = ({countSelectedCards, table}: { countSelectedCards: number, table: PokerPad['cards'] }): boolean => {
  return countSelectedCards <= countEmptySlots(table);
}

const placeCardsOnTable = (hand: Hand['handCards'], table: PokerPad['cards']): { newHand: Hand['handCards'], newTable: PokerPad['cards'] } => {
  const selectedCards = hand.filter(card => card.active);

  if (table.length + selectedCards.length > 5) {
    return { newHand: hand, newTable: table };
  }

  const newHand = hand.filter(card => !card.active);
  const newTable = [...table, ...selectedCards.map(card => ({ ...card, active: false }))];

  return { newHand, newTable };
};

const detectPokerHand = (cards: Card[]): string => {
  if (cards.length === 0) return '';

  const values = cards.map(card => card.numericValue).sort((a, b) => a - b);
  const suits = cards.map(card => card.color);
  const uniqueValues = [...new Set(values)];
  const uniqueSuits = [...new Set(suits)];

  const countOccurrences = (arr: number[]) => {
    return arr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);
  };

  const occurrences = countOccurrences(values);
  const counts = Object.values(occurrences).sort((a, b) => b - a); // Tri décroissant

  // Checking combinations
  const isFlush = uniqueSuits.length === 1 && cards.length === 5;

  // The Straight is only valid if playing with 5 cards
  const isStraight =
    cards.length === 5 &&
    uniqueValues.length === 5 &&
    (values[4] - values[0] === 4 ||
      (values.includes(14) && values.slice(0, -1).join(',') === "2,3,4,5")); // A-2-3-4-5

  const isFourOfAKind = counts[0] === 4;
  const isFullHouse = counts[0] === 3 && counts[1] === 2;
  const isThreeOfAKind = counts[0] === 3 && counts[1] !== 2;
  const isTwoPair = counts[0] === 2 && counts[1] === 2;
  const isOnePair = counts[0] === 2 && counts[1] !== 2;

  // Hand resolution
  if (isFlush && isStraight) return 'Straight Flush';
  if (isFourOfAKind) return 'Four of a Kind';
  if (isFullHouse) return 'Full House';
  if (isFlush) return 'Flush';
  if (isStraight) return 'Straight';
  if (isThreeOfAKind) return 'Three of a Kind';
  if (isTwoPair) return 'Two Pair';
  if (isOnePair) return 'One Pair';
  return 'High Card';
};

const PokerPasService = {
  countEmptySlots,
  canHoldSelectedCards,
  placeCardsOnTable,
  detectPokerHand,
};

export default PokerPasService;
