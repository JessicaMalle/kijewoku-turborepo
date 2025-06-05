import { useAppContext } from "./useAppContext.ts";

export const useDeck = () => {
	const { deck, hand, revealDeck, drawCardAndDeductChips } = useAppContext();

	const canDrawCard = hand.Cards.length < 5;

	return {
		deck,
		revealDeck,
		drawCardAndDeductChips,
		canDrawCard,
		cardsInDeck: deck.cards.length,
	};
};
