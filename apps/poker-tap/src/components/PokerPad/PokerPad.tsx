import { type ReactNode, useRef } from "react";
import { usePokerPad } from "../../hooks/states/usePokerPad.ts";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import { useSortedCards } from "../../hooks/utils/useSortedCards.utils.ts";
import PokerPadService from "../../services/PokerPadService.ts";
import Card from "../Card/Card.tsx";
import CardPlaceholder from "../Card/CardPlaceholder.tsx";
import {
	PokerPadCardsSection,
	PokerPadHead,
	StyledPokerPad,
	StyledPokerPadInfos,
} from "./PokerPad.styles.ts";
import { usePosition } from "../../hooks/process/usePosition.ts";
import { useElementBounds } from "../../hooks/utils/useElementBounds.ts";
import { useHand } from "../../hooks/states/useHand.ts";
import useReleaseDetection from "../../hooks/process/useReleaseDetection.ts";
import { useAppContext } from "../../hooks/states/useAppContext.ts";
import TextButton from "../Button/TextButton.tsx";
import Title from "../Typography/Typography.tsx";

function PokerPad({ id }: { id: number }): ReactNode {
	const { pokerPads, validatePokerPad } = useAppContext();
	const pokerPad = pokerPads[id];
	const { placeCardOnTable } = usePokerPad(id);
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
		<div>
			<StyledPokerPad
				id={`pp-${id}`}
				ref={myElementRef}
				$hovered={isInsideElement && !!hand.draggingCardUid}
			>
				<PokerPadHead>
					<StyledPokerPadInfos>
						<Title level={3}>{pokerHand || "(Play poker hand)"}</Title>
					</StyledPokerPadInfos>
					<TextButton
						label="> Validate this Poker-Pad <"
						onClick={validatePokerPad}
					/>
				</PokerPadHead>
				<PokerPadCardsSection>
					<div>
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
					</div>
					<StyledPokerPadInfos>+ {formatedBonus} CpC</StyledPokerPadInfos>
				</PokerPadCardsSection>
			</StyledPokerPad>
		</div>
	);
}

export default PokerPad;
