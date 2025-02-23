import {useEffect, useState} from "react";
import PokerPadService from "../../services/PokerPadService.ts";
import { useAppContext } from "./useAppContext.ts";
import {useHand} from "./useHand.ts";

export const usePokerPad = () => {
  const { pokerPad, placeCardsOnTable } = useAppContext();
  const { countSelectedCards } = useHand();

  const [detectedHand, setDetectedHand] = useState<string>("");
  const [handScore, setHandScore] = useState<number>(0);

  const countEmptySlots = PokerPadService.countEmptySlots(pokerPad.cards);

  const canHoldSelectedCards = PokerPadService.canHoldSelectedCards({
    countSelectedCards,
    table: pokerPad.cards,
  })

  useEffect(() => {
    const hand = PokerPadService.detectPokerHand(pokerPad.cards);
    setDetectedHand(hand);

    const score = PokerPadService.getPokerHandScore(pokerPad.cards);
    setHandScore(score);
  }, [pokerPad.cards]);

  return { pokerPad, placeCardsOnTable, countEmptySlots, canHoldSelectedCards, detectedHand, handScore };
};
