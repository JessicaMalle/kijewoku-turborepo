import { type ReactNode, useMemo } from "react";
import {
	DeckCardsStack,
	DeckContainer,
	PriceTag,
	StyledCardBack,
} from "./Deck.styles.ts";
import { useDeckAnimations } from "../../hooks/animations/useDeckAnimations.ts";
import { useDeck } from "../../hooks/states/useDeck.ts";

function Deck(): ReactNode {
	const { deck, nextCardPrice, canDrawCard, drawCardAndDeductChips } =
		useDeck();

	const { combineRefs } = useDeckAnimations({
		canDrawCard,
	});

	const deckSize = useMemo(() => {
		return deck.cards.length;
	}, [deck]);

	return (
		<DeckContainer>
			<StyledCardBack
				$disabled={!canDrawCard}
				ref={combineRefs}
				onClick={drawCardAndDeductChips}
			>
				<PriceTag>{nextCardPrice}€</PriceTag>
			</StyledCardBack>
			<DeckCardsStack $deckSize={deckSize}>
				{deck.cards.map((card) => (
					<div key={`deck-card-stack-${card.uid}`} />
				))}
			</DeckCardsStack>
		</DeckContainer>
	);
}

export default Deck;
