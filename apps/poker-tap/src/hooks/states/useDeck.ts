import {useEffect, useState} from "react";
import DeckService from "../../services/DeckService.ts";
import { useAppContext } from './useAppContext.ts';

export const useDeck = () => {
  const { chips, deck, shuffleDeck, revealDeck } = useAppContext();

  const [nextCardPrice, setNextCardPrice] = useState<number>(0);

  useEffect(() => {
    setNextCardPrice(DeckService.nextCardPrice(deck))
  }, [deck]);

  const canDrawNextCard = () => {
    return chips >= nextCardPrice;
  }

  return {
    deck,
    shuffleDeck,
    revealDeck,
    nextCardPrice,
    canDrawNextCard,
  };
};
