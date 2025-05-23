import type { ReactNode } from "react";
import { useReducer } from "react";
import useGameLoop from "../hooks/process/useGameLoop.ts";
import BoosterService from "../services/BoosterService.ts";
import ChipsService from "../services/ChipsService.ts";
import DeckService from "../services/DeckService.ts";
import PokerPadService from "../services/PokerPadService.ts";
import { SaveService } from "../services/SaveService.ts";
import type { BoosterType, Deck } from "../types/gameTypes.ts";
import { GameContext, type GameState } from "./GameContext.ts";
import { GameReducer } from "./GameReducer.ts";
import ItemsService from "../services/ItemsService.ts";

const initialGameState: GameState = {
	chips: 0,
	prevChips: 0,
	hand: { Cards: [], firstPickMade: false },
	deck: { cards: [] }, // Start with an empty deck, player will build it from cards
	pokerPad: SaveService.createPokerPad(),
	playedPokerPads: [],
	items: ItemsService.getInitialItems(),
	boosterCollection: BoosterService.createInitialBoosterCollection(),
	cardCollection: { cards: [] },
};

export const GameProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(
		GameReducer,
		SaveService.loadGame(initialGameState),
	);

	useGameLoop(state, dispatch);

	// Test for unique card UIDs - Remove after testing
	DeckService.testUniqueUIDs();

	// Actions
	const addChips = () => dispatch({ type: "ADD_CHIPS" });

	const validatePokerPad = () => {
		dispatch({ type: "VALIDATE_POKER_PAD" });
	};


	const shuffleDeck = () => dispatch({ type: "SHUFFLE_DECK" });

	const revealDeck = (deck: Deck) => DeckService.revealDeck(deck);

	const drawCard = (numberOfCardsToDraw = 1) =>
		dispatch({ type: "DRAW_CARD", payload: numberOfCardsToDraw });

	const drawCardAndDeductChips = () => {
		dispatch({ type: "DRAW_CARD_AND_DEDUCT_CHIPS" });
	};

	const setDraggingCardUid = (cardUid: string) => {
		dispatch({ type: "SET_DRAGGING_CARD_UID", payload: cardUid });
	};

	const clearDraggingCardUid = () => {
		dispatch({ type: "CLEAR_DRAGGING_CARD_UID" });
	};

	const toggleSelectedCard = (uid: string) =>
		dispatch({ type: "TOGGLE_SELECTED_HAND_CARD", payload: uid });

	const placeCardOnTable = (cardUid: string) =>
		dispatch({
			type: "PLACE_CARD_ON_TABLE",
			payload: cardUid,
		});

	const getTotalBonus = () =>
		ChipsService.getTotalBonus(state.pokerPad, state.playedPokerPads);

	const buyItem = (itemUid: string) => {
		dispatch({ type: "BUY_ITEM", payload: itemUid });
	};

	const getItemPrice = (itemUid: string) => {
		return ItemsService.getItemPrice(state.items, itemUid);
	};

	const canBuyItem = (itemUid: string) => {
		return ItemsService.canBuyItem(state.chips, state.items, itemUid);
	};

	const buyBooster = (type: BoosterType) => {
		dispatch({ type: "BUY_BOOSTER", payload: type });
	};

	const openBooster = (boosterUid: string) => {
		dispatch({ type: "OPEN_BOOSTER", payload: boosterUid });
	};

	const getBoosterPrice = (type: BoosterType) => {
		return BoosterService.getBoosterPrice(state.boosterCollection, type);
	};

	const canBuyBooster = (type: BoosterType) => {
		return BoosterService.canBuyBooster(state.chips, state.boosterCollection, type);
	};

	const createDeck = (cardUids: string[]) => {
		if (canCreateDeck(cardUids)) {
			dispatch({ type: "CREATE_DECK", payload: cardUids });
			return true;
		}
		return false;
	};

	const updateDeck = (cardUids: string[]) => {
		if (canCreateDeck(cardUids)) {
			dispatch({ type: "UPDATE_DECK", payload: cardUids });
			return true;
		}
		return false;
	};

	const canCreateDeck = (cardUids: string[]) => {
		// Minimum deck size is 32 cards
		if (cardUids.length < 32) {
			return false;
		}

		// Check if all cards in hand are included in the new deck
		const handCardUids = state.hand.Cards.map(card => card.uid);
		const allHandCardsIncluded = handCardUids.every(uid => cardUids.includes(uid));

		if (!allHandCardsIncluded) {
			return false;
		}

		// Get UIDs of cards in poker pads (current and played)
		const currentPokerPadCardUids = state.pokerPad.cards.map(card => card.uid);
		const playedPokerPadsCardUids = state.playedPokerPads.flatMap(pad => pad.cards.map(card => card.uid));
		const allPokerPadCardUids = [...currentPokerPadCardUids, ...playedPokerPadsCardUids];

		// Check if any selected cards are in poker pads
		const anyCardInPokerPad = cardUids.some(uid => allPokerPadCardUids.includes(uid));

		if (anyCardInPokerPad) {
			return false;
		}

		return true;
	};

	return (
		<GameContext.Provider
			value={{
				...state,
				addChips,
				validatePokerPad,
				shuffleDeck,
				revealDeck,
				drawCard,
				drawCardAndDeductChips,
				setDraggingCardUid,
				clearDraggingCardUid,
				toggleSelectedCard,
				placeCardOnTable,
				getTotalBonus,
				buyItem,
				getItemPrice,
				canBuyItem,
				buyBooster,
				openBooster,
				getBoosterPrice,
				canBuyBooster,
				createDeck,
				updateDeck,
				canCreateDeck,
			}}
		>
			{children}
		</GameContext.Provider>
	);
};
