import type {Deck, Hand} from "../types/gameTypes.ts";
import DeckService from "./DeckService.ts";

const drawHand = (deck: Deck, currentHand: Hand['handCards'] = []): { hand: Hand['handCards'], deck: Deck } => {
  let currentDeck = deck;
  const hand: Hand['handCards'] = [...currentHand];

  for (let i = hand.length; i < 5; i++) {
    const { card, deck: newDeck } = DeckService.drawCard(currentDeck);
    if (card) {
      hand.push({...card, active: false});
      currentDeck = newDeck;
    } else {
      break;
    }
  }

  return { hand, deck: currentDeck };
};

const toggleSelectedHandCard = (hand: Hand['handCards'], cardIndex: number): Hand['handCards'] => {
  return hand.map((card, index) => ({
    ...card,
    active: index === cardIndex ? !card.active : card.active,
  }));
};

const HandService = {
  drawHand,
  toggleSelectedHandCard,
};

export default HandService;
