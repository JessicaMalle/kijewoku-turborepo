import { SaveService } from "../../services/SaveService.ts";
import {useAppContext} from "./useAppContext.ts";

export const useSave = () => {
  const { chips, hand, deck } = useAppContext();

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
