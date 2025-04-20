import { type ReactNode, useMemo } from "react";
import { useGame } from "../../hooks/states/useGame.tsx";
import {
	DeckContainer,
	PriceTag,
	Rest,
	RevealDeckButton,
	StyledCardBack,
} from "./Deck.styles.ts";
import { useAppContext } from "../../hooks/states/useAppContext.ts";
import DeckService from "../../services/DeckService.ts";
import { useDeckAnimations } from "../../hooks/animations/useDeckAnimations.ts";

function Deck(): ReactNode {
	const { chips, deck, revealDeck, hand } = useAppContext();
	const { drawCardAndDeductChips } = useGame();

	const nextCardPrice: number = useMemo(() => {
		return DeckService.nextCardPrice(deck);
	}, [chips, deck]);

	const canDrawCard = chips >= nextCardPrice && hand.Cards.length < 5;

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
			<Rest>{deck.cards.length}</Rest>
		</DeckContainer>
	);
}

export default Deck;
