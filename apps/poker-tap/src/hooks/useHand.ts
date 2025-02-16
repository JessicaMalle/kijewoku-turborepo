import {useGame} from "./useGame.ts";

export const useHand = () => {
  const { hand, drawHand } = useGame();

  return { hand, drawHand };
}
