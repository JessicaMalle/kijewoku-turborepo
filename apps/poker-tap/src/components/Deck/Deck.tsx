import type { ReactNode } from "react";
import { DeckContainer, PriceTag, StyledCardBack } from "./Deck.styles.ts";
import { useDeckAnimations } from "../../hooks/animations/useDeckAnimations.ts";
import { useDeck } from "../../hooks/states/useDeck.ts";

function Deck(): ReactNode {
	const { nextCardPrice, canDrawCard, drawCardAndDeductChips } = useDeck();

	const { combineRefs } = useDeckAnimations({
		canDrawCard,
	});

	return (
		<DeckContainer>
			<StyledCardBack
				$disabled={!canDrawCard}
				ref={combineRefs}
				onClick={drawCardAndDeductChips}
			>
				<PriceTag>{nextCardPrice}€</PriceTag>
			</StyledCardBack>
		</DeckContainer>
	);
}

export default Deck;
