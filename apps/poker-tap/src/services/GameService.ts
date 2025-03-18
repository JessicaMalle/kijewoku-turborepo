import type { Deck, Hand } from "../types/gameTypes";
import DeckService from "./DeckService";
import HandService from "./HandService";

const MAX_HAND_SIZE = 5;
const ERROR_MAX_CARDS = "Can't draw 8 or more cards";
const ERROR_EMPTY_DECK = "Deck is empty";
const ERROR_NOT_ENOUGH_CHIPS = "Not enough chips to draw a card";

const validateDraw = (hand: Hand, deck: Deck, chips: number, cardPrice: number): { isValid: boolean; error?: string } => {
  const isHandFull = hand.Cards.length >= MAX_HAND_SIZE;
  const isDeckEmpty = deck.cards.length === 0;
  const hasInsufficientChips = chips < cardPrice;

  if (isHandFull) return { isValid: false, error: ERROR_MAX_CARDS };
  if (isDeckEmpty) return { isValid: false, error: ERROR_EMPTY_DECK };
  if (hasInsufficientChips) return { isValid: false, error: ERROR_NOT_ENOUGH_CHIPS };

  return { isValid: true };
};
const drawCardAndDeductChips = (deck: Deck, hand: Hand, chips: number): { deck: Deck, hand: Hand, updatedChips: number } => {
  const cardPrice = DeckService.nextCardPrice(deck);

  const validation = validateDraw(hand, deck, chips, cardPrice);
  if (!validation.isValid) {
    console.error(validation.error);
    return { deck, hand, updatedChips: chips };
  }

  // Process drawing a card
  const { deck: updatedDeck, hand: updatedHand } = HandService.drawCard(deck, hand, 1);
  const updatedChips = chips - cardPrice;

  return {
    deck: updatedDeck,
    hand: updatedHand,
    updatedChips,
  };
};

const GameService = {
  drawCardAndDeductChips,
};

export default GameService;
