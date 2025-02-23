import { useEffect, useState } from "react";
import type {Card, SortType} from "../../types/gameTypes.ts";

export const useSortedCards = (cards: Card[], sortType: SortType) => {
  const [sortedCards, setSortedCards] = useState<Card[]>([]);

  useEffect(() => {
    const sorted = [...cards];
    if (sortType === "value") {
      sorted.sort((a, b) => b.numericValue - a.numericValue);
    } else if (sortType === "color") {
      sorted.sort((a, b) => a.color.localeCompare(b.color));
    }
    setSortedCards(sorted);
  }, [cards, sortType]);

  return { sortedCards };
};
