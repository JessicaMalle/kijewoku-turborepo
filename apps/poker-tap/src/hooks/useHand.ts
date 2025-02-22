import HandService from "../services/HandService.ts";
import {useGame} from "./useGame.ts";

export const useHand = () => {
  const { hand, drawCard, toggleSelectedHandCard } = useGame();

  const countSelectedCards = HandService.countSelectedCards(hand);

  return { hand, drawCard, toggleSelectedHandCard, countSelectedCards };
}
