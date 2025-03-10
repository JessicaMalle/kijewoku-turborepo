import type {ReactNode} from "react";
import {useHand} from "../../hooks/states/useHand.ts";
import {usePokerPad} from "../../hooks/states/usePokerPad.ts";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import {useSortedCards} from "../../hooks/utils/useSortedCards.utils.ts";
import PokerPadService from "../../services/PokerPadService.ts";
import Card from "../Card/Card.tsx";
import {StyledPokerPad} from "./PokerPad.styles.ts";

function PokerPad({index}: {index: number}): ReactNode {
  const { pokerPad, placeCardsOnTable, countEmptySlots, canHoldSelectedCards } = usePokerPad(index);
  const { sortedCards } = useSortedCards(pokerPad.cards, "value");
  const { countSelectedCards } = useHand();

  const {hand, bonus} = PokerPadService.getPokerHandDetails(pokerPad.cards);
  const formatedBonus = useDigits({value: bonus, digits: 2});

  return (
    <div>
      <h4><b>Combination:</b> {hand} <b>- Bonus:</b> +{formatedBonus} CpC</h4>
      <StyledPokerPad>
        {sortedCards.map((card, index) => (
          <Card
            {...card}
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
