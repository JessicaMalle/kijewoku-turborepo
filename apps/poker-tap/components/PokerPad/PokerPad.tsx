import type {ReactNode} from "react";
import {usePokerPad} from "../../src/hooks/usePokerPad.ts";
import Card from "../Card/Card.tsx";
import {StyledPokerPad} from "./PokerPad.styles.ts";

function PokerPad(): ReactNode {
  const { pokerPad, placeCardsOnTable } = usePokerPad();

  return (
    <div>
      <button type="button" onClick={placeCardsOnTable}>Place selected cards</button>
      <StyledPokerPad>
        {pokerPad.cards.map((card, index) => (
          <Card
            {...card}
            index={index}
            active={false}
            key={`hand-card-${card.color}-${card.value}-i${index}`}
          />
        ))}
      </StyledPokerPad>
    </div>
  )
}

export default PokerPad;
