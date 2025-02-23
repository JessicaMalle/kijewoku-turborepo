import {useAppContext} from "./useAppContext.ts";

export const useChips = () => {
  const { chips, prevChips, addChips, getTotalMultiplier, pokerPads } = useAppContext();

  const totalMultiplier = getTotalMultiplier(pokerPads);

  return {
    chips,
    prevChips,
    addChips,
    totalMultiplier,
  };
};
