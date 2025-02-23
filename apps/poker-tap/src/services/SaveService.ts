import { v5 as uuIdv5 } from 'uuid';
import type {GameState} from "../context/GameContext.ts";
import type {Deck, Hand, PokerPad} from "../types/gameTypes.ts";
import { EncryptionService } from "./EncryptionService";
import HandService from "./HandService.ts";

const SAVE_KEY = "poker_tap_save";
export const NAMESPACE = '6ba7b810-9dad-11d1-80b4-00c04fd430c8';

export const SaveService = {
  saveGame: (state: GameState) => {
    console.log(state)
    try {
      const serializedState = JSON.stringify(state);
      const encryptedState = EncryptionService.encrypt(serializedState);
      localStorage.setItem(SAVE_KEY, encryptedState);
    } catch (error) {
      console.error("Failed to save game:", error);
    }
  },

  getUid: (type: string, index: number) => {
    return uuIdv5(`${type}-${index}`, NAMESPACE);
  },

  initializePokerPads: (): PokerPad[] => {
    return Array(1).fill(null).map((_, index) => ({
      uid: uuIdv5(`pokerPad-${index}`, NAMESPACE),
      cards: []
    }));
  },

  initializeGame: (initialGameState: { deck: Deck; hand: Hand }): { deck: Deck; hand: Hand; pokerPads: PokerPad[] } => {
    let newDeck: Deck = { cards: [...initialGameState.deck.cards] };
    let newHand: Hand = { handCards: [...initialGameState.hand.handCards], firstPickMade: initialGameState.hand.firstPickMade };

    const result = HandService.drawCard(newDeck, newHand, 2);
    newDeck = result.deck;
    newHand = result.hand;

    const pokerPads = SaveService.initializePokerPads();

    return {
      deck: newDeck,
      hand: newHand,
      pokerPads: pokerPads,
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
      return { ...JSON.parse(decryptedState), prevChips: 0 } as GameState;
    } catch (error) {
      console.error("Failed to load game:", error);
      return initialGameState;
    }
  },

  clearSave: () => {
    localStorage.removeItem(SAVE_KEY);
  },
};
