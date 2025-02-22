import type {Card, Hand, PokerPad} from "../types/gameTypes.ts";

export interface PokerHandResult {
  hand: string;
  score: number;
  multiplier: number;
}

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

const getPokerHandScore = (cards: Card[]): number => {
  const hand = detectPokerHand(cards);
  const values = cards.map(card => card.numericValue);
  const highestValue = Math.max(...values, 0);

  const countOccurrences = (arr: number[]) =>
    arr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {} as Record<number, number>);

  const occurrences = countOccurrences(values);
  const pairs = Object.entries(occurrences)
    .filter(([, count]) => count === 2)
    .map(([val]) => Number.parseInt(val));

  const triplets = Object.entries(occurrences)
    .filter(([, count]) => count === 3)
    .map(([val]) => Number.parseInt(val));

  const quads = Object.entries(occurrences)
    .filter(([, count]) => count === 4)
    .map(([val]) => Number.parseInt(val));

  const baseScores: Record<string, number> = {
    'Straight Flush': 250 + highestValue,
    'Four of a Kind': 150 + (quads[0] || 0),
    'Full House': 120 + (triplets[0] || 0) * 2,
    'Flush': 90 + highestValue,
    'Straight': 75 + highestValue,
    'Three of a Kind': 50 + (triplets[0] || 0),
    'Two Pair': 30 + pairs.reduce((sum, val) => sum + val, 0),
    'One Pair': 15 + (pairs[0] || 0),
    'High Card': highestValue,
  };

  return baseScores[hand] || 0;
};

export const getPokerHandDetails = (cards: Card[]): PokerHandResult => {
  if (cards.length === 0) {
    return { hand: "", score: 0, multiplier: 1 };
  }

  const hand = detectPokerHand(cards);
  const score = getPokerHandScore(cards);

  let multiplierBase = 1;

  switch (hand) {
    case "High Card":
      multiplierBase = 1;
      break;
    case "One Pair":
      multiplierBase = 2;
      break;
    case "Two Pair":
      multiplierBase = 3;
      break;
    case "Three of a Kind":
      multiplierBase = 2;
      break;
    case "Straight":
      multiplierBase = 2.5;
      break;
    case "Flush":
      multiplierBase = 5;
      break;
    case "Full House":
      multiplierBase = 3;
      break;
    case "Four of a Kind":
      multiplierBase = 5;
      break;
    case "Straight Flush":
      multiplierBase = 10;
      break;
    default:
      multiplierBase = 1;
      break;
  }

  const multiplier = 1 + (score / 100) * multiplierBase;

  return { hand, score, multiplier };
};

const PokerPasService = {
  countEmptySlots,
  canHoldSelectedCards,
  placeCardsOnTable,
  detectPokerHand,
  getPokerHandScore,
  getPokerHandDetails,
};

export default PokerPasService;
