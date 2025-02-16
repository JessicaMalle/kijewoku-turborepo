import type {Card, Deck, Hand} from "../types/gameTypes.ts";
import DeckService from "./DeckService.ts";

const drawHand = (deck: Deck, currentHand: Hand['cards'] = []): { hand: Hand['cards'], deck: Deck } => {
  let currentDeck = deck;
  const hand: Card[] = [...currentHand];

  for (let i = hand.length; i < 5; i++) {
    const { card, deck: newDeck } = DeckService.drawCard(currentDeck);
    if (card) {
      hand.push(card);
      currentDeck = newDeck;
    } else {
      break;
    }
  }

  return { hand, deck: currentDeck };
};

const HandService = {
  drawHand,
}

export default HandService;
