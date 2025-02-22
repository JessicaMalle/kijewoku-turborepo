import type {Card, CardColor, CardValue, Deck} from "../types/gameTypes.ts";

const createDeck = (): Deck => {
  const colors: CardColor[] = ['spades', 'hearts', 'clover', 'diamonds'];
  const values: CardValue[] = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
  const cards: Card[] = [];

  for (const color of colors) {
    for (const value of values) {
      cards.push({ color, value, numericValue: getNumericValue(value) });
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

const DeckService = {
  createDeck,
  shuffleDeck,
  drawCardFromDeck,
  placeCardUnderDeck,
  revealDeck,
  nextCardPrice,
};

export default DeckService;
