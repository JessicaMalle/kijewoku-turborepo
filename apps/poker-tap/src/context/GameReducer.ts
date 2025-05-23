import BoosterService from "../services/BoosterService.ts";
import ChipsService from "../services/ChipsService.ts";
import DeckService from "../services/DeckService.ts";
import GameService from "../services/GameService.ts";
import HandService from "../services/HandService.ts";
import PokerPadService from "../services/PokerPadService.ts";
import PokerPasService from "../services/PokerPadService.ts";
import { SaveService } from "../services/SaveService.ts";
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
					pokerPad: state.pokerPad,
					playedPokerPads: state.playedPokerPads,
				}),
			};
		case "VALIDATE_POKER_PAD": {
			// Move the current poker pad to playedPokerPads and create a new one
			const playedPokerPad = state.pokerPad;
			const newPokerPad = SaveService.createPokerPad();

			// Get the UIDs of cards in the poker pad being validated
			const pokerPadCardUids = playedPokerPad.cards.map(card => card.uid);

			// Remove these cards from the deck to prevent them from being drawn again
			const newDeck = {
				...state.deck,
				cards: state.deck.cards.filter(card => !pokerPadCardUids.includes(card.uid))
			};

			return {
				...state,
				pokerPad: newPokerPad,
				playedPokerPads: [...state.playedPokerPads, { ...playedPokerPad }],
				deck: newDeck,
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
			const cardUid = action.payload;
			const cardToPlace = state.hand.Cards.find((card) => card.uid === cardUid);

			if (!cardToPlace) {
				return state;
			}

			if (state.pokerPad.cards.length + 1 > 5) {
				return state;
			}

			const newHand = state.hand.Cards.filter((card) => card.uid !== cardUid);
			const newCards = [...state.pokerPad.cards, { ...cardToPlace, active: false }];

			// Also remove the card from the deck to prevent it from being drawn again
			const newDeck = {
				...state.deck,
				cards: state.deck.cards.filter((card) => card.uid !== cardUid)
			};

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
				deck: newDeck,
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

		case "BUY_BOOSTER": {
			const boosterType = action.payload;
			const boosterPrice = BoosterService.getBoosterPrice(state.boosterCollection, boosterType);

			if (state.chips >= boosterPrice) {
				return {
					...state,
					chips: state.chips - boosterPrice,
					boosterCollection: BoosterService.buyBooster(state.boosterCollection, boosterType)
				};
			}
			return state;
		}

		case "OPEN_BOOSTER": {
			const boosterUid = action.payload;
			const { boosterCollection, openedCards } = BoosterService.openBooster(
				state.boosterCollection,
				boosterUid
			);

			return {
				...state,
				boosterCollection,
				cardCollection: {
					cards: [...state.cardCollection.cards, ...openedCards]
				}
			};
		}

		case "CREATE_DECK": {
			const cardUids = action.payload;

			// Ensure minimum deck size
			if (cardUids.length < 32) {
				return state;
			}

			// Get UIDs of cards in poker pads (current and played)
			const currentPokerPadCardUids = state.pokerPad.cards.map(card => card.uid);
			const playedPokerPadsCardUids = state.playedPokerPads.flatMap(pad => pad.cards.map(card => card.uid));
			const allPokerPadCardUids = [...currentPokerPadCardUids, ...playedPokerPadsCardUids];

			// Get UIDs of cards in hand
			const handCardUids = state.hand.Cards.map(card => card.uid);

			// Find the cards in the collection, excluding those in poker pads
			// Include all cards from the hand (they should already be in cardUids due to validation)
			const selectedCards = state.cardCollection.cards.filter(card =>
				(cardUids.includes(card.uid) || handCardUids.includes(card.uid)) &&
				!allPokerPadCardUids.includes(card.uid)
			);

			// Create a new deck with the selected cards
			return {
				...state,
				deck: {
					cards: selectedCards
				}
			};
		}

		case "UPDATE_DECK": {
			const cardUids = action.payload;

			// Ensure minimum deck size
			if (cardUids.length < 32) {
				return state;
			}

			// Get UIDs of cards in poker pads (current and played)
			const currentPokerPadCardUids = state.pokerPad.cards.map(card => card.uid);
			const playedPokerPadsCardUids = state.playedPokerPads.flatMap(pad => pad.cards.map(card => card.uid));
			const allPokerPadCardUids = [...currentPokerPadCardUids, ...playedPokerPadsCardUids];

			// Get UIDs of cards in hand
			const handCardUids = state.hand.Cards.map(card => card.uid);

			// Find the cards in the collection, excluding those in poker pads
			// Include all cards from the hand (they should already be in cardUids due to validation)
			const selectedCards = state.cardCollection.cards.filter(card =>
				(cardUids.includes(card.uid) || handCardUids.includes(card.uid)) &&
				!allPokerPadCardUids.includes(card.uid)
			);

			// Update the deck with the selected cards
			return {
				...state,
				deck: {
					cards: selectedCards
				}
			};
		}

		default:
			return state;
	}
};
