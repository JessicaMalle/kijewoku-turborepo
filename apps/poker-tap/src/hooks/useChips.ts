import {useGame} from "./useGame.ts";

export const useChips = () => {
  const { chips, addChips } = useGame();

  const handleAddChips = (chipsToAdd: number) => {
    addChips(chipsToAdd);
  };

  return {
    chips,
    handleAddChips,
  };
};
