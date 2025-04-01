import type {Deck, Hand} from "../types/gameTypes.ts";
import DeckService from "./DeckService.ts";

const countSelectedCards = (hand: Hand): number => {
  return hand.Cards.filter(card => card.active).length;
}

const drawCard = (deck: Deck, currentHand: Hand, numberOfCardsToDraw = 1): { hand: Hand, deck: Deck } => {
  const newDeck = { ...deck, cards: [...deck.cards] };
  const newHand = { ...currentHand, Cards: [...currentHand.Cards] };

  for (let i = 0; i < numberOfCardsToDraw; i++) {
    if (newHand.Cards.length < 7 && newDeck.cards.length > 0) {
      const { card, deck: updatedDeck } = DeckService.drawCardFromDeck(newDeck);
      if (card) {
        newHand.Cards.push({ ...card, active: false });
        newDeck.cards = updatedDeck.cards;
      }
    }
  }

  return { hand: newHand, deck: newDeck };
};

const toggleSelectedCard = (hand: Hand['Cards'], uid: string): Hand['Cards'] => {
  return hand.map((card) => ({
    ...card,
    active: card.uid === uid ? !card.active : card.active,
  }));
};

const removeSelectedCards = (hand: Hand['Cards']): Hand['Cards'] => {
  return hand.filter(card => !card.active);
};

const forceHandOpen = (hand: Hand, open: boolean): Hand => {
  return { ...hand, forceOpen: open };
};

const HandService = {
  countSelectedCards,
  drawCard,
  toggleSelectedCard,
  removeSelectedCards,
  forceHandOpen,
};

export default HandService;
