import {useAppContext} from "./useAppContext.ts";

export const useChips = () => {
  const { chips, prevChips, addChips } = useAppContext();

  return {
    chips,
    prevChips,
    addChips,
  };
};
