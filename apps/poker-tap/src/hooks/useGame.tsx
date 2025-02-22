import {useAppContext} from "./useAppContext.ts";

export const useGame = () => {
  const { drawCardAndDeductChips } = useAppContext();

  return {
    drawCardAndDeductChips,
  };
};
