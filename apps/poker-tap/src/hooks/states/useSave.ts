import { SaveService } from "../../services/SaveService.ts";
import {useAppContext} from "./useAppContext.ts";

export const useSave = () => {
  const state = useAppContext();

  const saveGame = () => {
    SaveService.saveGame(state);
    alert("Game saved!");
  };

  const clearSave = () => {
    SaveService.clearSave();
    alert("Save cleared!");
    window.location.reload();
  };

  return {
    saveGame,
    clearSave,
  };
};
