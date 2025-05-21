import type { PokerPad } from "../types/gameTypes.ts";
import PokerPadService from "./PokerPadService";

function addChips({
	currentChips,
	pokerPad,
	playedPokerPads,
}: {
	currentChips: number;
	pokerPad: PokerPad;
	playedPokerPads: PokerPad[];
}): number {
	const base = 100;
	const totalBonus = getTotalBonus(pokerPad, playedPokerPads);

	return currentChips + base + totalBonus;
}

function getTotalBonus(
	pokerPad: PokerPad,
	playedPokerPadsBonus: PokerPad[],
): number {
	const { bonus: pokerPadBonus } = PokerPadService.getPokerHandDetails(pokerPad.cards);

	const resultPlayedPokerPadsBonus = playedPokerPadsBonus.reduce((acc, pad) => {
		const { bonus } = PokerPadService.getPokerHandDetails(pad.cards);
		return acc + bonus;
	}, 0);
	return pokerPadBonus + resultPlayedPokerPadsBonus;
}

const ChipsService = {
	addChips,
	getTotalBonus,
};

export default ChipsService;
