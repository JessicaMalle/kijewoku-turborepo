import { type ReactNode, useRef } from "react";
import { usePokerPad } from "../../hooks/states/usePokerPad.ts";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import { useSortedCards } from "../../hooks/utils/useSortedCards.utils.ts";
import PokerPadService from "../../services/PokerPadService.ts";
import Card from "../Card/Card.tsx";
import CardPlaceholder from "../Card/CardPlaceholder.tsx";
import { StyledPokerPad, StyledPokerPadInfos } from "./PokerPad.styles.ts";
import { usePosition } from "../../hooks/process/usePosition.ts";
import { useElementBounds } from "../../hooks/utils/useElementBounds.ts";
import { useHand } from "../../hooks/states/useHand.ts";
import { useGlobalMouseUp } from "../../providers/useGlobalMouseEvent.tsx";

function PokerPad({ id }: { id: number }): ReactNode {
	const { pokerPad, placeCardsOnTable } = usePokerPad(id);
	const { sortedCards } = useSortedCards(pokerPad.cards, "value");
	const { position } = usePosition();
	const { hand, clearDraggingCardUid } = useHand();
	const myElementRef = useRef<HTMLDivElement>(null);
	const isInsideElement = useElementBounds<HTMLDivElement>({
		elementRef: myElementRef,
		...position,
	});

	useGlobalMouseUp(() => {
		if (isInsideElement && hand.draggingCardUid) {
			clearDraggingCardUid();
		}
	});

	const { hand: pokerHand, bonus } = PokerPadService.getPokerHandDetails(
		pokerPad.cards,
	);
	const formatedBonus = useDigits({ value: bonus, digits: 2 });

	const cardsWithPlaceholders = [
		...sortedCards,
		...Array(5 - sortedCards.length).fill(null),
	];

	return (
		<div>
			<StyledPokerPadInfos>
				{position.x}/{position.y}
				<br />
				{isInsideElement ? "Dedans" : "Dehors"}
				<br />
				card: {hand.draggingCardUid}
				<div>
					<b>Combination:</b> {pokerHand} <b>- Bonus:</b> +{formatedBonus} CpC
				</div>
			</StyledPokerPadInfos>
			<StyledPokerPad ref={myElementRef}>
				{cardsWithPlaceholders.map((card, index) =>
					card ? (
						<Card
							{...card}
							key={`hand-card-${card.color}-${card.value}-i${index}`}
						/>
					) : (
						<CardPlaceholder
							key={window.btoa(`placeholder-${index}`)}
							onClick={() => placeCardsOnTable(id)}
						/>
					),
				)}
			</StyledPokerPad>
		</div>
	);
}

export default PokerPad;
