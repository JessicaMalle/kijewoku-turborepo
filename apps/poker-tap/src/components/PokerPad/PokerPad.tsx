import { type ReactNode, useEffect, useRef } from "react";
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
import { useGameLoop } from "../../hooks/process/useGameLoop.ts";

function PokerPad({ id }: { id: number }): ReactNode {
	const { play, pause, start, update, isRunning } = useGameLoop();

	const { pokerPad, placeCardOnTable } = usePokerPad(id);
	const { sortedCards } = useSortedCards(pokerPad.cards, "value");
	const { position } = usePosition();
	const { hand } = useHand();
	const myElementRef = useRef<HTMLDivElement>(null);
	const isInsideElement = useElementBounds<HTMLDivElement>({
		elementRef: myElementRef,
		...position,
	});

	const { hand: pokerHand, bonus } = PokerPadService.getPokerHandDetails(
		pokerPad.cards,
	);
	const formatedBonus = useDigits({ value: bonus, digits: 2 });

	const cardsWithPlaceholders = [
		...sortedCards,
		...Array(5 - sortedCards.length).fill(null),
	];

	useEffect(() => {
		if (isInsideElement && hand.draggingCardUid) {
			placeCardOnTable(id, hand.draggingCardUid);
		}
	}, [isInsideElement, hand.draggingCardUid]);

	start(() => {
		console.log("Game started!");
	});

	update((deltaTime) => {
		console.log("Game loop update", deltaTime);
	});

	return (
		<div>
			<button type="button" onClick={play} disabled={isRunning}>
				Play
			</button>
			<button type="button" onClick={pause} disabled={!isRunning}>
				Pause
			</button>
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
			<StyledPokerPad id={`pp-${id}`} ref={myElementRef}>
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
