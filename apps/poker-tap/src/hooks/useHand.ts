import {useGame} from "./useGame.ts";

export const useHand = () => {
  const { hand, drawHand, toggleSelectedHandCard } = useGame();

  return { hand, drawHand, toggleSelectedHandCard };
}
