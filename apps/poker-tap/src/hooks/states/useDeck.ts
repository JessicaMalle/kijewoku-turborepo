import { useMemo } from "react";
import DeckService from "../../services/DeckService.ts";
import { useAppContext } from "./useAppContext.ts";

export const useDeck = () => {
	const { chips, deck, hand } = useAppContext();

	const nextCardPrice: number = useMemo(() => {
		return DeckService.nextCardPrice(deck);
	}, [chips, deck]);

	const canDrawCard = chips >= nextCardPrice && hand.Cards.length < 5;

	return {
		nextCardPrice,
		canDrawCard,
		cardsInDeck: deck.cards.length,
	};
};
