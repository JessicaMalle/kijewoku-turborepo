import { v5 as uuIdv5 } from 'uuid';
import type {
  Booster,
  BoosterCollection,
  BoosterType,
  Card,
  CardRarity,
  CardWithRarity
} from "../types/gameTypes.ts";
import { NAMESPACE } from "./SaveService.ts";
import DeckService from "./DeckService.ts";

// Rarity distribution for classic boosters
const CLASSIC_BOOSTER_DISTRIBUTION = {
  COMMON: 3,     // 3 common cards
  UNCOMMON: 2,   // 2 uncommon cards
  RARE: 1,       // 1 rare card
  EPIC: 0.8,     // 80% chance for an epic card (otherwise rare)
  LEGENDARY: 0.2 // 20% chance for a legendary card (otherwise epic)
};

// Base price for boosters
const BASE_BOOSTER_PRICE = 100;
// Price increase per booster purchased
const PRICE_INCREASE_PER_PURCHASE = 20;

/**
 * Creates a new booster collection with initial boosters
 */
const createInitialBoosterCollection = (): BoosterCollection => {
  const boosters = [];

  // Add 5 classic boosters to start with
  for (let i = 0; i < 5; i++) {
    boosters.push(createBooster("CLASSIC"));
  }

  return {
    boosters,
    purchaseCount: 0
  };
};

/**
 * Creates a new booster of the specified type
 */
const createBooster = (type: BoosterType): Booster => {
  const uid = uuIdv5(`booster-${type}-${Date.now()}-${Math.random()}`, NAMESPACE);

  return {
    uid,
    type,
    cards: [],
    opened: false
  };
};

/**
 * Generates cards for a booster based on its type
 */
const generateBoosterCards = (booster: Booster, deck: Deck): Booster => {
  if (booster.cards.length > 0 || booster.opened) {
    return booster; // Booster already has cards or is already opened
  }

  const cards: CardWithRarity[] = [];

  // If the deck is empty, create a temporary deck with cards
  const deckToUse = deck.cards.length === 0 ? DeckService.createDeck() : deck;

  // Generate cards based on booster type
  switch (booster.type) {
    case "CLASSIC":
      generateClassicBoosterCards(cards, deckToUse.cards);
      break;
    // Add more booster types here in the future
  }

  return {
    ...booster,
    cards
  };
};

/**
 * Generates cards for a classic booster
 */
const generateClassicBoosterCards = (cards: CardWithRarity[], deckCards: Card[]) => {
  // Create a copy of the deck cards to avoid modifying the original
  const availableCards = [...deckCards];

  // Shuffle the available cards
  for (let i = availableCards.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [availableCards[i], availableCards[j]] = [availableCards[j], availableCards[i]];
  }

  // Add common cards
  for (let i = 0; i < CLASSIC_BOOSTER_DISTRIBUTION.COMMON; i++) {
    if (availableCards.length === 0) break;
    const card = availableCards.pop();
    if (card) {
      cards.push({ ...card, rarity: "COMMON" });
    }
  }

  // Add uncommon cards
  for (let i = 0; i < CLASSIC_BOOSTER_DISTRIBUTION.UNCOMMON; i++) {
    if (availableCards.length === 0) break;
    const card = availableCards.pop();
    if (card) {
      cards.push({ ...card, rarity: "UNCOMMON" });
    }
  }

  // Add rare card
  if (availableCards.length > 0) {
    const card = availableCards.pop();
    if (card) {
      cards.push({ ...card, rarity: "RARE" });
    }
  }

  // Add epic or legendary card based on probability
  if (availableCards.length > 0) {
    const card = availableCards.pop();
    if (card) {
      // Determine if it's legendary (20% chance) or epic (80% chance)
      const isLegendary = Math.random() < CLASSIC_BOOSTER_DISTRIBUTION.LEGENDARY;
      cards.push({ ...card, rarity: isLegendary ? "LEGENDARY" : "EPIC" });
    }
  }
};

/**
 * Opens a booster and returns its cards
 */
const openBooster = (boosterCollection: BoosterCollection, boosterUid: string, deck: Deck): {
  boosterCollection: BoosterCollection,
  openedCards: CardWithRarity[]
} => {
  const boosterIndex = boosterCollection.boosters.findIndex(b => b.uid === boosterUid);

  if (boosterIndex === -1) {
    return { boosterCollection, openedCards: [] };
  }

  const booster = boosterCollection.boosters[boosterIndex];

  if (booster.opened) {
    return { boosterCollection, openedCards: [] };
  }

  // Generate cards if not already generated
  const updatedBooster = booster.cards.length === 0
    ? generateBoosterCards(booster, deck)
    : booster;

  // Mark as opened
  const openedBooster = {
    ...updatedBooster,
    opened: true
  };

  // Update the booster collection
  const updatedBoosters = [...boosterCollection.boosters];
  updatedBoosters[boosterIndex] = openedBooster;

  return {
    boosterCollection: {
      ...boosterCollection,
      boosters: updatedBoosters
    },
    openedCards: openedBooster.cards
  };
};

/**
 * Adds a new booster to the collection
 */
const buyBooster = (boosterCollection: BoosterCollection, type: BoosterType): BoosterCollection => {
  const newBooster = createBooster(type);

  return {
    boosters: [...boosterCollection.boosters, newBooster],
    purchaseCount: boosterCollection.purchaseCount + 1
  };
};

/**
 * Calculates the price of a booster based on the number of boosters purchased
 */
const getBoosterPrice = (boosterCollection: BoosterCollection, type: BoosterType): number => {
  return BASE_BOOSTER_PRICE + (boosterCollection.purchaseCount * PRICE_INCREASE_PER_PURCHASE);
};

/**
 * Checks if the player can afford to buy a booster
 */
const canBuyBooster = (chips: number, boosterCollection: BoosterCollection, type: BoosterType): boolean => {
  const price = getBoosterPrice(boosterCollection, type);
  return chips >= price;
};

const BoosterService = {
  createInitialBoosterCollection,
  createBooster,
  generateBoosterCards,
  openBooster,
  buyBooster,
  getBoosterPrice,
  canBuyBooster
};

export default BoosterService;
