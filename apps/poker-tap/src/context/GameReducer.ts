import ChipsService from "../services/ChipsService.ts";
import DeckService from "../services/DeckService.ts";
import GameService from "../services/GameService.ts";
import HandService from "../services/HandService.ts";
import PokerPadService from "../services/PokerPadService.ts";
import PokerPasService from "../services/PokerPadService.ts";
import type { Action, GameState } from "./GameContext";
import ItemsService from "../services/ItemsService.ts";
import { MAX_ACTIVE_POKER_PADS } from "../config/gameConfig.ts";

export const GameReducer = (state: GameState, action: Action): GameState => {
	switch (action.type) {
		case "ADD_CHIPS":
			return {
				...state,
				prevChips: state.chips,
				chips: ChipsService.addChips({
					currentChips: state.chips,
					pokerPads: state.pokerPads,
					playedPokerPads: state.playedPokerPads,
				}),
			};
		case "VALIDATE_POKER_PAD": {
			// If there's an existing poker pad, move it to playedPokerPads
			if (state.pokerPads.length > 0) {
				const playedPokerPad = state.pokerPads[0];
				return {
					...state,
					pokerPads: [PokerPasService.createPokerPad(state.pokerPads.length + state.playedPokerPads.length)],
					playedPokerPads: [...state.playedPokerPads, { ...playedPokerPad }],
				};
			}

			// If there's no poker pad, create a new one
			const newPokerPad = PokerPasService.createPokerPad(
				state.pokerPads.length + state.playedPokerPads.length,
			);
			return {
				...state,
				pokerPads: [newPokerPad],
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
			const { deck, hand, updatedChips } = GameService.drawCardAndDeductChips(
				state.deck,
				state.hand,
				state.chips,
			);
			return {
				...state,
				deck,
				hand,
				chips: updatedChips,
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
			const { newHand, newPokerPads } = PokerPadService.placeCardOnTable(
				state.hand.Cards,
				state.pokerPads,
				action.payload.index,
				action.payload.cardUid,
			);

			if (newHand !== state.hand.Cards || newPokerPads !== state.pokerPads) {
				return {
					...state,
					hand: {
						...state.hand,
						Cards: newHand,
					},
					pokerPads: newPokerPads,
				};
			}

			return state;
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
		case "MARK_POKER_PAD_AS_PLAYED": {
			const updatedPokerPads = state.pokerPads.filter(
				(_, index) => index !== action.payload,
			);
			const playedPokerPad = state.pokerPads.find(
				(_, index) => index === action.payload,
			);

			return {
				...state,
				pokerPads: updatedPokerPads,
				playedPokerPads: playedPokerPad
					? [...state.playedPokerPads, { ...playedPokerPad }]
					: state.playedPokerPads,
			};
		}

		default:
			return state;
	}
};
