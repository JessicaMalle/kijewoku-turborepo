import type { Deck, Hand } from "../types/gameTypes";
import HandService from "./HandService";

const MAX_HAND_SIZE = 5;
const ERROR_MAX_CARDS = "Can't draw 8 or more cards";
const ERROR_EMPTY_DECK = "Deck is empty";

const validateDraw = (
	hand: Hand,
	deck: Deck,
): { isValid: boolean; error?: string } => {
	const isHandFull = hand.Cards.length >= MAX_HAND_SIZE;
	const isDeckEmpty = deck.cards.length === 0;
	// Drawing cards is now free, so we don't need to check if the player has enough chips

	if (isHandFull) return { isValid: false, error: ERROR_MAX_CARDS };
	if (isDeckEmpty) return { isValid: false, error: ERROR_EMPTY_DECK };
	// Removed check for insufficient chips since drawing cards is now free

	return { isValid: true };
};
const drawCardAndDeductChips = (
	deck: Deck,
	hand: Hand,
): { deck: Deck; hand: Hand } => {
	// Card price is now 0, so we don't need to check if the player has enough chips
	const validation = validateDraw(hand, deck);
	if (!validation.isValid) {
		console.error(validation.error);
		return { deck, hand };
	}

	// Process drawing a card
	const { deck: updatedDeck, hand: updatedHand } = HandService.drawCard(
		deck,
		hand,
		1,
	);

	return {
		deck: updatedDeck,
		hand: updatedHand,
	};
};

const GameService = {
	drawCardAndDeductChips,
};

export default GameService;
