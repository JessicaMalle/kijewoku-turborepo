import type {GameState} from "../context/GameContext.ts";
import type {Deck, Hand} from "../types/gameTypes.ts";
import { EncryptionService } from "./EncryptionService";
import HandService from "./HandService.ts";

const SAVE_KEY = "poker_tap_save";

export const SaveService = {
  saveGame: (state: GameState) => {
    try {
      const serializedState = JSON.stringify(state);
      const encryptedState = EncryptionService.encrypt(serializedState);
      localStorage.setItem(SAVE_KEY, encryptedState);
    } catch (error) {
      console.error("Failed to save game:", error);
    }
  },

  initializeGame: (initialGameState: { deck: Deck; hand: Hand }): { deck: Deck; hand: Hand } => {
    let newDeck: Deck = { cards: [...initialGameState.deck.cards] };
    let newHand: Hand = { handCards: [...initialGameState.hand.handCards], firstPickMade: initialGameState.hand.firstPickMade };

    const result = HandService.drawCard(newDeck, newHand, 2);
    newDeck = result.deck;
    newHand = result.hand;

    return {
      deck: newDeck,
      hand: newHand,
    };
  },

  loadGame: (initialGameState: GameState): GameState => {
    try {
      const encryptedState = localStorage.getItem(SAVE_KEY);
      if (encryptedState === null) {
        const { deck, hand } = SaveService.initializeGame(initialGameState);

        return {
          ...initialGameState,
          deck: deck,
          hand: hand,
        };
      }
      const decryptedState = EncryptionService.decrypt(encryptedState);
      return JSON.parse(decryptedState) as GameState;
    } catch (error) {
      console.error("Failed to load game:", error);
      return initialGameState;
    }
  },

  clearSave: () => {
    localStorage.removeItem(SAVE_KEY);
  },
};
