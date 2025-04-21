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
import useReleaseDetection from "../../hooks/process/useReleaseDetection.ts";
import Button from "../Button/Button.tsx";
import { useAppContext } from "../../hooks/states/useAppContext.ts";

function PokerPad({ id }: { id: number }): ReactNode {
	const { pokerPads } = useAppContext();
	const { pokerPad, placeCardOnTable, markPokerPadAsPlayed } = usePokerPad(id);
	const { sortedCards } = useSortedCards(pokerPad.cards, "value");
	const { position } = usePosition();
	const { hand } = useHand();
	const myElementRef = useRef<HTMLDivElement>(null);
	const isInsideElement = useElementBounds<HTMLDivElement>({
		elementRef: myElementRef,
		...position,
	});

	const handleRelease = () => {
		if (isInsideElement && hand.draggingCardUid) {
			placeCardOnTable(id, hand.draggingCardUid);
		}
	};

	useReleaseDetection({
		onRelease: handleRelease,
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
		<div onClick={() => console.table(pokerPads)}>
			<StyledPokerPadInfos>
				{pokerPad.played ? "Played" : "Unplayed"}
				<Button label="Play the Poker Pad" onClick={markPokerPadAsPlayed} />
				<div>
					<b>Combination:</b> {pokerHand} <b>- Bonus:</b> +{formatedBonus} CpC
				</div>
			</StyledPokerPadInfos>
			<StyledPokerPad
				id={`pp-${id}`}
				ref={myElementRef}
				$hovered={isInsideElement && !!hand.draggingCardUid}
			>
				{cardsWithPlaceholders.map((card, index) =>
					card ? (
						<Card
							{...card}
							key={`hand-card-${card.color}-${card.value}-i${index}`}
						/>
					) : (
						<CardPlaceholder
							key={window.btoa(`placeholder-${index}`)}
							onClick={() => placeCardOnTable(id, card.uid)}
						/>
					),
				)}
			</StyledPokerPad>
		</div>
	);
}

export default PokerPad;
