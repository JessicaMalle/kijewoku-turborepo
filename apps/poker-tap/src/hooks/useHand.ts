import {useGame} from "./useGame.ts";

export const useHand = () => {
  const { hand, drawCard, toggleSelectedHandCard } = useGame();

  return { hand, drawCard, toggleSelectedHandCard };
}
