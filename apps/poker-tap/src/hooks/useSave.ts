import { SaveService } from "../services/SaveService";
import {useGame} from "./useGame.ts";

export const useSave = () => {
  const { chips, hand, deck } = useGame();

  const saveGame = () => {
    SaveService.saveGame({ chips, hand, deck });
    alert("Game saved!");
  };

  const clearSave = () => {
    SaveService.clearSave();
    alert("Save cleared!");
  };

  return {
    saveGame,
    clearSave,
  };
};
