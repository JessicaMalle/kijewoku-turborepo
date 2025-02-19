import {useGame} from "./useGame.ts";

export const useChips = () => {
  const { chips, addChips } = useGame();

  return {
    chips,
    addChips,
  };
};
