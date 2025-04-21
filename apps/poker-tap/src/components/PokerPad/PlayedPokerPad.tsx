import type { ReactNode } from "react";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import PokerPadService from "../../services/PokerPadService.ts";
import Card from "../Card/Card.tsx";
import CardPlaceholder from "../Card/CardPlaceholder.tsx";
import {
	StyledPlayedPokerPad,
	StyledPokerPadInfos,
} from "./PokerPad.styles.ts";
import { useAppContext } from "../../hooks/states/useAppContext.ts";

function PlayedPokerPad({ id }: { id: number }): ReactNode {
	const { playedPokerPads } = useAppContext();
	const pokerPad = playedPokerPads[id];

	const { hand: pokerHand, bonus } = PokerPadService.getPokerHandDetails(
		pokerPad.cards,
	);
	const formatedBonus = useDigits({ value: bonus, digits: 2 });

	const cardsWithPlaceholders = [
		...pokerPad.cards,
		...Array(5 - pokerPad.cards.length).fill(null),
	];

	return (
		<div>
			<StyledPokerPadInfos>
				<div>
					<b>Combination:</b> {pokerHand} <b>- Bonus:</b> +{formatedBonus} CpC
				</div>
			</StyledPokerPadInfos>
			<StyledPlayedPokerPad id={`pp-${id}`}>
				{cardsWithPlaceholders.map((card, index) =>
					card ? (
						<Card
							{...card}
							key={`hand-card-${card.color}-${card.value}-i${index}`}
						/>
					) : (
						<CardPlaceholder key={window.btoa(`placeholder-${index}`)} />
					),
				)}
			</StyledPlayedPokerPad>
		</div>
	);
}

export default PlayedPokerPad;
