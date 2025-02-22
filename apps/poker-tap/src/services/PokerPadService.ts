import type { Hand, PokerPad } from "../types/gameTypes.ts";

const countEmptySlots = (table: PokerPad['cards']): number => {
  return 5 - table.length;
}

const canHoldSelectedCards = ({countSelectedCards, table}: { countSelectedCards: number, table: PokerPad['cards'] }): boolean => {
  return countSelectedCards <= countEmptySlots(table);
}

const placeCardsOnTable = (hand: Hand['handCards'], table: PokerPad['cards']): { newHand: Hand['handCards'], newTable: PokerPad['cards'] } => {
  const selectedCards = hand.filter(card => card.active);

  if (table.length + selectedCards.length > 5) {
    return { newHand: hand, newTable: table };
  }

  const newHand = hand.filter(card => !card.active);
  const newTable = [...table, ...selectedCards.map(card => ({ ...card, active: false }))];

  return { newHand, newTable };
};

const PokerPasService = {
  countEmptySlots,
  canHoldSelectedCards,
  placeCardsOnTable,
};

export default PokerPasService;
