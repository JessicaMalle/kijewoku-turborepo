import type { ReactNode } from "react";
import { useGame } from "../../hooks/states/useGame.tsx";
import {
	DeckContainer,
	PriceTag,
	Rest,
	RevealDeckButton,
	StyledCardBack,
} from "./Deck.styles.ts";
import { useAppContext } from "../../hooks/states/useAppContext.ts";
import { useDeckAnimations } from "../../hooks/animations/useDeckAnimations.ts";
import { useDeck } from "../../hooks/states/useDeck.ts";

function Deck(): ReactNode {
	const { deck, revealDeck } = useAppContext();
	const { drawCardAndDeductChips } = useGame();

	const { nextCardPrice, canDrawCard, cardsInDeck } = useDeck();

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
			<RevealDeckButton
				className="reveal-deck-text"
				onClick={() => revealDeck(deck)}
			>
				👀
			</RevealDeckButton>
			<Rest>{cardsInDeck}</Rest>
		</DeckContainer>
	);
}

export default Deck;
