import HandService from "../../services/HandService.ts";
import {useAppContext} from "./useAppContext.ts";

export const useHand = () => {
  const { hand, drawCard, toggleSelectedCard, setDraggingCardUid, clearDraggingCardUid } = useAppContext();

  const countSelectedCards = HandService.countSelectedCards(hand);

  const forceHandOpen = (open: boolean) => HandService.forceHandOpen(hand, open);

  return { hand, drawCard, toggleSelectedCard, countSelectedCards, forceHandOpen, setDraggingCardUid, clearDraggingCardUid };
}
