import type {ReactNode} from "react";
import {useHand} from "../../hooks/states/useHand.ts";
import {usePokerPad} from "../../hooks/states/usePokerPad.ts";
import PokerPadService from "../../services/PokerPadService.ts";
import Card from "../Card/Card.tsx";
import {StyledPokerPad} from "./PokerPad.styles.ts";

function PokerPad({index}: {index: number}): ReactNode {
  const { pokerPad, placeCardsOnTable, countEmptySlots, canHoldSelectedCards } = usePokerPad(index);
  const { countSelectedCards } = useHand();

  const {hand, bonus} = PokerPadService.getPokerHandDetails(pokerPad.cards);

  return (
    <div>
      <h4><b>Combination:</b> {hand} <b>- Bonus:</b> +{bonus} CpC</h4>
      <StyledPokerPad>
        {pokerPad.cards.map((card, index) => (
          <Card
            {...card}
            index={index}
            key={`hand-card-${card.color}-${card.value}-i${index}`}
          />
        ))}
      </StyledPokerPad>
      <button type="button" onClick={() => placeCardsOnTable(index)} disabled={!canHoldSelectedCards || (countSelectedCards === 0)}>
        {!canHoldSelectedCards ? `TOO MANY SELECTED CARDS (Empty slots : ${countEmptySlots})` : 'Place selected cards'}
      </button>
    </div>
  )
}

export default PokerPad;
