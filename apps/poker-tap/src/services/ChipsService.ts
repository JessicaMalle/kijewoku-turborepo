import type { PokerPad } from "../types/gameTypes.ts";
import PokerPadService from "./PokerPadService";

function addChips({
	currentChips,
	pokerPads,
	playedPokerPads,
}: {
	currentChips: number;
	pokerPads: PokerPad[];
	playedPokerPads: PokerPad[];
}): number {
	const base = 100;
	const totalBonus = getTotalBonus(pokerPads, playedPokerPads);

	return currentChips + base + totalBonus;
}

function getTotalBonus(
	pokerPads: PokerPad[],
	playedPokerPadsBonus: PokerPad[],
): number {
	const resultPokerPadsBonus = pokerPads.reduce((acc, pad) => {
		const { bonus } = PokerPadService.getPokerHandDetails(pad.cards);
		return acc + bonus;
	}, 0);
	const resultPlayedPokerPadsBonus = playedPokerPadsBonus.reduce((acc, pad) => {
		const { bonus } = PokerPadService.getPokerHandDetails(pad.cards);
		return acc + bonus;
	}, 0);
	return resultPokerPadsBonus + resultPlayedPokerPadsBonus;
}

const ChipsService = {
	addChips,
	getTotalBonus,
};

export default ChipsService;
