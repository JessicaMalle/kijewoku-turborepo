import type {ReactNode} from "react";
import {useHand} from "../../src/hooks/useHand.ts";
import {usePokerPad} from "../../src/hooks/usePokerPad.ts";
import Card from "../Card/Card.tsx";
import {StyledPokerPad} from "./PokerPad.styles.ts";

function PokerPad(): ReactNode {
  const { pokerPad, placeCardsOnTable, countEmptySlots, canHoldSelectedCards, detectedHand } = usePokerPad();
  const { countSelectedCards } = useHand();

  return (
    <div>
      <button type="button" onClick={placeCardsOnTable} disabled={!canHoldSelectedCards || (countSelectedCards === 0)}>
        {!canHoldSelectedCards ? `TOO MANY SELECTED CARDS (Empty slots : ${countEmptySlots})` : 'Place selected cards'}
      </button>
      <h1>{detectedHand}</h1>
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
