import {useEffect, useState} from "react";
import PokerPadService from "../services/PokerPadService.ts";
import { useGame } from "./useGame.ts";
import {useHand} from "./useHand.ts";

export const usePokerPad = () => {
  const { pokerPad, placeCardsOnTable } = useGame();
  const { countSelectedCards } = useHand();

  const [detectedHand, setDetectedHand] = useState<string>("");

  const countEmptySlots = PokerPadService.countEmptySlots(pokerPad.cards);

  const canHoldSelectedCards = PokerPadService.canHoldSelectedCards({
    countSelectedCards,
    table: pokerPad.cards,
  })

  useEffect(() => {
    const hand = PokerPadService.detectPokerHand(pokerPad.cards);
    setDetectedHand(hand);
  }, [pokerPad.cards]);

  return { pokerPad, placeCardsOnTable, countEmptySlots, canHoldSelectedCards, detectedHand };
};
