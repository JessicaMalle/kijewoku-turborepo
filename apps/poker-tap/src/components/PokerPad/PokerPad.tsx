import type { ReactNode } from "react";
import { usePokerPad } from "../../hooks/states/usePokerPad.ts";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import { useSortedCards } from "../../hooks/utils/useSortedCards.utils.ts";
import PokerPadService from "../../services/PokerPadService.ts";
import Card from "../Card/Card.tsx";
import CardPlaceholder from "../Card/CardPlaceholder.tsx";
import { StyledPokerPad, StyledPokerPadInfos } from "./PokerPad.styles.ts";
import { usePosition } from "../../hooks/process/usePosition.ts";

function PokerPad({ cardId }: { cardId: number }): ReactNode {
	const { pokerPad, placeCardsOnTable } = usePokerPad(cardId);
	const { sortedCards } = useSortedCards(pokerPad.cards, "value");
	const { position } = usePosition();

	const { hand, bonus } = PokerPadService.getPokerHandDetails(pokerPad.cards);
	const formatedBonus = useDigits({ value: bonus, digits: 2 });

	const cardsWithPlaceholders = [
		...sortedCards,
		...Array(5 - sortedCards.length).fill(null),
	];

	return (
		<div>
			<StyledPokerPadInfos>
				{position.x}/{position.y}
				<div>
					<b>Combination:</b> {hand} <b>- Bonus:</b> +{formatedBonus} CpC
				</div>
			</StyledPokerPadInfos>
			<StyledPokerPad>
				{cardsWithPlaceholders.map((card, index) =>
					card ? (
						<Card
							{...card}
							key={`hand-card-${card.color}-${card.value}-i${index}`}
						/>
					) : (
						<CardPlaceholder
							key={window.btoa(`placeholder-${index}`)}
							onClick={() => placeCardsOnTable(cardId)}
						/>
					),
				)}
			</StyledPokerPad>
		</div>
	);
}

export default PokerPad;
