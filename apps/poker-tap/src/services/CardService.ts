import type { Card, CardColor, CardValue } from "../types/gameTypes.ts";
import { SaveService } from "./SaveService.ts";
import { getNumericValue } from "../utils/getNumericalValue.ts";

const genCard = (): Card => {
	const colors: CardColor[] = ["spades", "hearts", "clover", "diamonds"];
	const values: CardValue[] = [
		"2",
		"3",
		"4",
		"5",
		"6",
		"7",
		"8",
		"9",
		"10",
		"J",
		"Q",
		"K",
		"A",
	];

	const randomColor = colors[Math.floor(Math.random() * colors.length)];
	const randomValue = values[Math.floor(Math.random() * values.length)];
	const uid = SaveService.genUid(
		`card-${randomColor}-${randomValue}`,
		Math.floor(Math.random() * randomColor.length),
	);

	return {
		uid,
		color: randomColor,
		value: randomValue,
		numericValue: getNumericValue(randomValue),
	};
};

export default genCard;
