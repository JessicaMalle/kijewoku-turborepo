import {useAppContext} from "./useAppContext.ts";

export const useChips = () => {
  const { chips, addChips } = useAppContext();

  return {
    chips,
    addChips,
  };
};
