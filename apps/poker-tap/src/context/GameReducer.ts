import ChipsService from "../services/ChipsService.ts";
import DeckService from "../services/DeckService.ts";
import GameService from "../services/GameService.ts";
import HandService from "../services/HandService.ts";
import { SaveService } from "../services/SaveService.ts";
import type { Action, GameState } from "./GameContext";
import ItemsService from "../services/ItemsService.ts";

export const GameReducer = (state: GameState, action: Action): GameState => {
	switch (action.type) {
		case "ADD_CHIPS":
			return {
				...state,
				prevChips: state.chips,
				chips: ChipsService.addChips({
					currentChips: state.chips,
					pokerPad: state.pokerPad,
					playedPokerPads: state.playedPokerPads,
				}),
			};
		case "VALIDATE_POKER_PAD": {
			// Move the current poker pad to playedPokerPads and create a new one
			const playedPokerPad = state.pokerPad;
			const newPokerPad = SaveService.createPokerPad();
			return {
				...state,
				pokerPad: newPokerPad,
				playedPokerPads: [...state.playedPokerPads, { ...playedPokerPad }],
			};
		}
		case "SHUFFLE_DECK":
			return { ...state, deck: DeckService.shuffleDeck(state.deck) };
		case "DRAW_CARD": {
			const { hand, deck } = HandService.drawCard(
				state.deck,
				state.hand,
				action.payload,
			);
			return {
				...state,
				hand: {
					...state.hand,
					Cards: hand.Cards,
				},
				deck: {
					...state.deck,
					cards: deck.cards,
				},
			};
		}
		case "DRAW_CARD_AND_DEDUCT_CHIPS": {
			const { deck, hand } = GameService.drawCardAndDeductChips(
				state.deck,
				state.hand,
			);
			return {
				...state,
				deck,
				hand,
			};
		}
		case "TOGGLE_SELECTED_HAND_CARD": {
			return {
				...state,
				hand: {
					...state.hand,
					Cards: HandService.toggleSelectedCard(
						state.hand.Cards,
						action.payload,
					),
				},
			};
		}
		case "SET_DRAGGING_CARD_UID": {
			return {
				...state,
				hand: {
					...state.hand,
					forceOpen: true,
					draggingCardUid: action.payload,
				},
			};
		}
		case "SET_LAST_DRAGGING_CARD_UID": {
			return {
				...state,
				hand: {
					...state.hand,
					draggingCardUid: action.payload,
				},
			};
		}
		case "CLEAR_DRAGGING_CARD_UID": {
			return {
				...state,
				hand: {
					...state.hand,
					forceOpen: false,
					draggingCardUid: undefined,
				},
			};
		}
		case "CLEAR_LAST_DRAGGING_CARD_UID": {
			return {
				...state,
				hand: {
					...state.hand,
					draggingCardUid: undefined,
				},
			};
		}
		case "PLACE_CARD_ON_TABLE": {
			const cardUid = action.payload;
			const cardToPlace = state.hand.Cards.find((card) => card.uid === cardUid);

			if (!cardToPlace) {
				return state;
			}

			if (state.pokerPad.cards.length + 1 > 5) {
				return state;
			}

			const newHand = state.hand.Cards.filter((card) => card.uid !== cardUid);
			const newCards = [
				...state.pokerPad.cards,
				{ ...cardToPlace, active: false },
			];

			return {
				...state,
				hand: {
					...state.hand,
					Cards: newHand,
				},
				pokerPad: {
					...state.pokerPad,
					cards: newCards,
				},
			};
		}
		case "BUY_ITEM": {
			const itemUid = action.payload;
			const itemPrice = ItemsService.getItemPrice(state.items, itemUid);

			if (state.chips >= itemPrice) {
				return {
					...state,
					chips: state.chips - itemPrice,
					items: ItemsService.addItemByUid(state.items, itemUid),
				};
			}
			return state;
		}
		case "AUTO_CLICK":
			return {
				...state,
				chips: state.chips + action.payload,
				prevChips: state.chips,
			};

		default:
			return state;
	}
};
