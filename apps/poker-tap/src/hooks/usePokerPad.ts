import { useGame } from "./useGame.ts";

export const usePokerPad = () => {
  const { pokerPad, placeCardsOnTable } = useGame();

  return { pokerPad, placeCardsOnTable };
};
