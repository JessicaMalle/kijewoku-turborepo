import type { Deck, Hand } from "../types/gameTypes";
import DeckService from "./DeckService";
import HandService from "./HandService";

const drawCardAndDeductChips = (deck: Deck, hand: Hand, currentChips: number): { deck: Deck, hand: Hand, remainingChips: number } => {
  if (hand.Cards.length === 7) {
    console.error("Can't draw 8 or more cards");
    return {
      deck,
      hand,
      remainingChips: currentChips,
    }
  }

  const cardPrice = DeckService.nextCardPrice(deck);
  if (currentChips < cardPrice) {
    console.error("Not enough chips to draw a card");
  }

  const { deck: newDeck, hand: newHand } = HandService.drawCard(deck, hand, 1);
  const remainingChips = currentChips - cardPrice;

  return {
    deck: newDeck,
    hand: newHand,
    remainingChips,
  };
};

const GameService = {
  drawCardAndDeductChips,
};

export default GameService;
