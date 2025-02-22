import type {Deck, Hand} from "../types/gameTypes.ts";
import DeckService from "./DeckService.ts";

const drawCard = (deck: Deck, currentHand: Hand, numberOfCardsToDraw = 1): { hand: Hand, deck: Deck } => {
  const newDeck = { ...deck, cards: [...deck.cards] };
  const newHand = { ...currentHand, handCards: [...currentHand.handCards] };

  for (let i = 0; i < numberOfCardsToDraw; i++) {
    if (newHand.handCards.length < 7) {
      const { card, deck: updatedDeck } = DeckService.drawCardFromDeck(newDeck);
      if (card) {
        newHand.handCards.push({ ...card, active: false });
        newDeck.cards = updatedDeck.cards;
      }
    }
  }

  return { hand: newHand, deck: newDeck };
};

const toggleSelectedHandCard = (hand: Hand['handCards'], cardIndex: number): Hand['handCards'] => {
  return hand.map((card, index) => ({
    ...card,
    active: index === cardIndex ? !card.active : card.active,
  }));
};

const removeSelectedCards = (hand: Hand['handCards']): Hand['handCards'] => {
  return hand.filter(card => !card.active);
};

const HandService = {
  drawCard,
  toggleSelectedHandCard,
  removeSelectedCards,
};

export default HandService;
