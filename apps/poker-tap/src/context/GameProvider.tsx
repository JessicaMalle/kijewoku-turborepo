import type { ReactNode } from "react";
import { useReducer } from "react";
import useGameLoop from "../hooks/process/useGameLoop.ts";
import ChipsService from "../services/ChipsService.ts";
import DeckService from "../services/DeckService.ts";
import PokerPadService from "../services/PokerPadService.ts";
import { SaveService } from "../services/SaveService.ts";
import type { Deck } from "../types/gameTypes.ts";
import { GameContext, type GameState } from "./GameContext.ts";
import { GameReducer } from "./GameReducer.ts";
import ItemsService from "../services/ItemsService.ts";

const initialGameState: GameState = {
	chips: 0,
	prevChips: 0,
	hand: { Cards: [], firstPickMade: false },
	deck: DeckService.shuffleDeck(DeckService.createDeck()),
	pokerPads: SaveService.initializePokerPads(),
	items: ItemsService.getInitialItems(),
};

export const GameProvider = ({ children }: { children: ReactNode }) => {
	const [state, dispatch] = useReducer(
		GameReducer,
		SaveService.loadGame(initialGameState),
	);

	useGameLoop(state, dispatch);

	// Actions
	const addChips = () => dispatch({ type: "ADD_CHIPS" });

	const buyPokerPad = () => {
		dispatch({ type: "BUY_POKER_PAD" });
	};

	const nextPokerPadPrice = PokerPadService.calculatePokerPadCost(
		state.pokerPads.length,
	);

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

	const placeCardOnTable = (index: number, cardUid: string) =>
		dispatch({
			type: "PLACE_CARD_ON_TABLE",
			payload: { index, cardUid },
		});

	const getTotalBonus = () => ChipsService.getTotalBonus(state.pokerPads);

	const buyItem = (itemUid: string) => {
		dispatch({ type: "BUY_ITEM", payload: itemUid });
	};

	const getItemPrice = (itemUid: string) => {
		return ItemsService.getItemPrice(state.items, itemUid);
	};

	const canBuyItem = (itemUid: string) => {
		return ItemsService.canBuyItem(state.chips, state.items, itemUid);
	};

	return (
		<GameContext.Provider
			value={{
				...state,
				addChips,
				buyPokerPad,
				nextPokerPadPrice,
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
			}}
		>
			{children}
		</GameContext.Provider>
	);
};
