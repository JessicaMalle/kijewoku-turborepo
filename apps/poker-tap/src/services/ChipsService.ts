import type {PokerPad} from "../types/gameTypes.ts";
import PokerPadService from './PokerPadService';

function addChips({ currentChips, pokerPads }: { currentChips: number, pokerPads: PokerPad[] }): number {
  const base = 100;
  const totalBonus = getTotalBonus(pokerPads);

  return currentChips + base + totalBonus;
}

function getTotalBonus(pokerPads: PokerPad[]): number {
  return pokerPads.reduce((acc, pad) => {
    const { bonus } = PokerPadService.getPokerHandDetails(pad.cards);
    return acc + bonus;
  }, 0);
}

const ChipsService = {
  addChips,
  getTotalBonus,
}

export default ChipsService;
