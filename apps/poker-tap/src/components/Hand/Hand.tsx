import type {ReactNode} from "react";
import {useHand} from "../../hooks/states/useHand.ts";
import Card from "../Card/Card.tsx";
import {StyledHand} from "./Hand.styles.ts";

function Hand(): ReactNode {
  const { hand } = useHand();

  return (
    <div>
      <StyledHand>
        {hand.handCards.map((card, index) => (
          <Card
            {...card}
            index={index}
            key={`hand-card-${card.color}-${card.value}-i${index}`}
          />
        ))}
      </StyledHand>
    </div>
  );
}

export default Hand;
