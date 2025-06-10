import type { Booster, BoosterProps } from "../types/gameTypes";
import genCard from "./CardService";

const genBooster = ({
	edition = "basic",
	type = "gameCard",
	size = 3,
}: BoosterProps): Booster => {
	const cards = [];
	for (let i = 0; i < size; i++) {
		cards.push(genCard());
	}

	return {
		edition,
		type,
		size,
		cards,
	};
};

export { genBooster };
