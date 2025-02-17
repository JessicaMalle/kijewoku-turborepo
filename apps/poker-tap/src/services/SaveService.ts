import type {GameState} from "../context/GameContext.ts";
import { EncryptionService } from "./EncryptionService";

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

  loadGame: (initialGameState: GameState): GameState => {
    try {
      const encryptedState = localStorage.getItem(SAVE_KEY);
      if (encryptedState === null) return initialGameState;
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
