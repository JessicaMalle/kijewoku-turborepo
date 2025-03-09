import { type ReactNode, useState } from "react";
    import { useHand } from "../../hooks/states/useHand.ts";
    import { useSortedCards } from "../../hooks/utils/useSortedCards.utils.ts";
    import type {Card as CardType, SortType} from "../../types/gameTypes.ts";
    import Card from "../Card/Card.tsx";
    import {StyledCards, StyledHand, StyledSorter} from "./Hand.styles.ts";

    function Hand(): ReactNode {
      const { hand } = useHand();

      const [handSort, setHandSort] = useState<SortType>("value");
      const { sortedCards } = useSortedCards(hand.Cards, handSort);

      return (
        <StyledHand>
          <StyledCards>
            {sortedCards.map((card: CardType, index: number) => (
              <Card
                {...card}
                key={`hand-card-${card.color}-${card.value}-i${index}`}
              />
            ))}
          </StyledCards>
          <StyledSorter>
            <p>Sort by:</p>
            <div>
              <button type="button" onClick={() => setHandSort('value')}>Value</button>
              <button type="button" onClick={() => setHandSort('color')}>Color</button>
            </div>
          </StyledSorter>
        </StyledHand>
      );
    }

    export default Hand;
