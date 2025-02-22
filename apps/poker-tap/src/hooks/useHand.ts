import HandService from "../services/HandService.ts";
import {useAppContext} from "./useAppContext.ts";

export const useHand = () => {
  const { hand, drawCard, toggleSelectedHandCard } = useAppContext();

  const countSelectedCards = HandService.countSelectedCards(hand);

  return { hand, drawCard, toggleSelectedHandCard, countSelectedCards };
}
