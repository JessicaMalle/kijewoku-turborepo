import {useAppContext} from "./useAppContext.ts";

export const useChips = () => {
  const { chips, prevChips, addChips, getTotalBonus } = useAppContext();

  const totalBonus = getTotalBonus();

  return {
    chips,
    prevChips,
    addChips,
    totalBonus,
  };
};
