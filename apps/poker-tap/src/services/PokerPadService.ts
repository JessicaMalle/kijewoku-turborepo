import type { Hand, PokerPad } from "../types/gameTypes.ts";

const placeCardsOnTable = (hand: Hand['handCards'], table: PokerPad['cards']): { newHand: Hand['handCards'], newTable: PokerPad['cards'] } => {
  const selectedCards = hand.filter(card => card.active);
  const newHand = hand.filter(card => !card.active);
  const newTable = [...table, ...selectedCards.map(card => ({ ...card, active: false }))];

  return { newHand, newTable };
};

const TableService = {
  placeCardsOnTable,
};

export default TableService;
