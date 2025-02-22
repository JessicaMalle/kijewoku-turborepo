import type {ReactNode} from "react";
import {useHand} from "../../src/hooks/useHand.ts";
import {usePokerPad} from "../../src/hooks/usePokerPad.ts";
import PokerPadService from "../../src/services/PokerPadService.ts";
import Card from "../Card/Card.tsx";
import {StyledPokerPad} from "./PokerPad.styles.ts";

function PokerPad(): ReactNode {
  const { pokerPad, placeCardsOnTable, countEmptySlots, canHoldSelectedCards } = usePokerPad();
  const { countSelectedCards } = useHand();

  const {hand, multiplier} = PokerPadService.getPokerHandDetails(pokerPad.cards);

  return (
    <div>
      <button type="button" onClick={placeCardsOnTable} disabled={!canHoldSelectedCards || (countSelectedCards === 0)}>
        {!canHoldSelectedCards ? `TOO MANY SELECTED CARDS (Empty slots : ${countEmptySlots})` : 'Place selected cards'}
      </button>
      <p><b>Combination:</b> {hand} <b>- Multiplier:</b> +{multiplier}%</p>
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
