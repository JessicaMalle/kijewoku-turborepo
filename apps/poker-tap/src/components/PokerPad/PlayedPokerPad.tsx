import type { ReactNode } from "react";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import PokerPadService from "../../services/PokerPadService.ts";
import Card from "../Card/Card.tsx";
import CardPlaceholder from "../Card/CardPlaceholder.tsx";
import {
	StyledPlayedPokerPad,
	StyledPokerPadInfos,
	PokerPadCardsSection,
	PokerPadHead,
} from "./PokerPad.styles.ts";
import { useAppContext } from "../../hooks/states/useAppContext.ts";
import Title from "../Typography/Typography.tsx";
import { PokerPadsWrapperStyles } from "../Layouts/PokerPadsWrapper.styles.ts";

type PlayedPokerPadProps = {
	id: number;
	size?: number | 'small' | 'medium' | 'default';
};

function PlayedPokerPad({ id, size = 'default' }: PlayedPokerPadProps): ReactNode {
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
		<PokerPadsWrapperStyles>
			<StyledPlayedPokerPad id={`pp-${id}`} $size={size}>
				<PokerPadHead>
					<StyledPokerPadInfos>
						<Title level={3}>{pokerHand || "(No combination)"}</Title>
					</StyledPokerPadInfos>
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
								<CardPlaceholder key={window.btoa(`placeholder-${index}`)} />
							),
						)}
					</div>
					<StyledPokerPadInfos>+ {formatedBonus} CpC</StyledPokerPadInfos>
				</PokerPadCardsSection>
			</StyledPlayedPokerPad>
		</PokerPadsWrapperStyles>
	);
}

export default PlayedPokerPad;
