import type {Card} from "../types/gameTypes.ts";
import PokerPadService from './PokerPadService';

function addChips({ currentChips, cards }: { currentChips: number, cards: Card[] }): number {
  const { multiplier } = PokerPadService.getPokerHandDetails(cards);

  return currentChips + multiplier;
}

const ChipsService = {
  addChips,
}

export default ChipsService;
