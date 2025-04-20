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
				}),
			};
		case "BUY_POKER_PAD": {
			if (state.pokerPads.length === MAX_ACTIVE_POKER_PADS) {
				console.error(`Too many poker pads (max: ${MAX_ACTIVE_POKER_PADS}).`);
				return state;
			}
			const cost = PokerPadService.calculatePokerPadCost(
				state.pokerPads.length,
			);
			if (state.chips >= cost) {
				const newPokerPad = PokerPasService.createPokerPad(
					state.pokerPads.length,
				);
				return {
					...state,
					chips: state.chips - cost,
					pokerPads: [...state.pokerPads, newPokerPad],
				};
			}
			return state;
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

		default:
			return state;
	}
};
