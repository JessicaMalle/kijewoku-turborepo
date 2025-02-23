import type {PokerPad} from "../types/gameTypes.ts";
import PokerPadService from './PokerPadService';

function addChips({ currentChips, pokerPads }: { currentChips: number, pokerPads: PokerPad[] }): number {
  const base = 1;
  const totalMultiplier = getTotalMultiplier(pokerPads);

  return currentChips + base + totalMultiplier;
}

function getTotalMultiplier(pokerPads: PokerPad[]): number {
  return pokerPads.reduce((acc, pad) => {
    const { multiplier } = PokerPadService.getPokerHandDetails(pad.cards);
    return acc + multiplier;
  }, 0);
}

const ChipsService = {
  addChips,
  getTotalMultiplier,
}

export default ChipsService;
