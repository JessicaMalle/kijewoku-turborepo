import { v5 as uuIdv5 } from 'uuid';
import type {Card, CardColor, CardValue, Deck} from "../types/gameTypes.ts";
import {NAMESPACE} from "./SaveService.ts";

const createDeck = (): Deck => {
  const colors: CardColor[] = ['spades', 'hearts', 'clover', 'diamonds'];
  const values: CardValue[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const cards: Card[] = [];

  for (const color of colors) {
    for (const value of values) {
      // Add timestamp and random value to ensure uniqueness
      // Update timestamp for each card to ensure uniqueness even for same color and value
      const timestamp = Date.now();
      // Generate a more complex random string to ensure uniqueness
      const random1 = Math.random().toString(36).substring(2);
      const random2 = Math.random().toString(36).substring(2);
      const random3 = Math.random().toString(36).substring(2);
      // Combine multiple random values to create a highly unique string
      const uniqueString = `${random1}-${random2}-${random3}-${timestamp}`;
      const uid = uuIdv5(`card-${color}-${value}-${uniqueString}`, NAMESPACE);
      cards.push({ uid, color, value, numericValue: getNumericValue(value) });
    }
  }

  return { cards };
};

const getNumericValue = (value: CardValue): number => {
  if (value === 'J') return 11;
  if (value === 'Q') return 12;
  if (value === 'K') return 13;
  if (value === 'A') return 14;
  return Number.parseInt(value, 10);
};

const shuffleDeck = (deck: Deck): Deck => {
  const shuffled = [...deck.cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return { cards: shuffled };
};

const drawCardFromDeck = (deck: Deck): { card: Card | null, deck: Deck } => {
  if (deck.cards.length === 0) return { card: null, deck };
  const [card, ...rest] = deck.cards;
  return { card, deck: { cards: rest } };
};

const placeCardUnderDeck = (deck: Deck, card: Card): Deck => {
  return { cards: [...deck.cards, card] };
};

const revealDeck = (deck: Deck) => {
  console.log(deck);
}

const nextCardPrice = (deck: Deck): number => {
  const totalCards = 52;
  const remainingCards = deck.cards.length;
  const basePrice = 10;
  const priceMultiplier = 2;

  return basePrice + (totalCards - remainingCards) * priceMultiplier;
};

// Test function to check for duplicate UIDs
const testUniqueUIDs = (): void => {
  console.log("Testing for unique UIDs across multiple decks...");

  // Create multiple decks
  const numDecks = 5;
  const decks = [];

  for (let i = 0; i < numDecks; i++) {
    const deck = createDeck();
    decks.push(deck);
    console.log(`Deck ${i + 1} created with ${deck.cards.length} cards.`);
  }

  // Collect all UIDs
  const allUids = decks.flatMap(deck => deck.cards.map(card => card.uid));
  console.log(`Total cards across all decks: ${allUids.length}`);

  // Check for duplicates
  const uniqueUids = new Set(allUids);
  console.log(`Unique UIDs: ${uniqueUids.size}`);

  if (uniqueUids.size === allUids.length) {
    console.log("SUCCESS: All cards have unique UIDs!");
  } else {
    console.log(`ERROR: Found ${allUids.length - uniqueUids.size} duplicate UIDs!`);
  }
};

const DeckService = {
  createDeck,
  shuffleDeck,
  drawCardFromDeck,
  placeCardUnderDeck,
  revealDeck,
  nextCardPrice,
  testUniqueUIDs,
};

export default DeckService;
