import type { CardValue } from "../types/gameTypes.ts";

export const getNumericValue = (value: CardValue): number => {
	if (value === "J") return 11;
	if (value === "Q") return 12;
	if (value === "K") return 13;
	if (value === "A") return 14;
	return Number.parseInt(value, 10);
};
