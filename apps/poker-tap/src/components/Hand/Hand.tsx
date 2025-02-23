import type {ReactNode} from "react";
import {useDeck} from "../../hooks/states/useDeck.ts";
import {useGame} from "../../hooks/states/useGame.tsx";
import {useHand} from "../../hooks/states/useHand.ts";
import Card from "../Card/Card.tsx";
import {StyledHand} from "./Hand.styles.ts";

function Hand(): ReactNode {
  const { drawCardAndDeductChips } = useGame();
  const { hand } = useHand();
  const { deck, nextCardPrice, canDrawNextCard } = useDeck();

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
      <h2>Deck size: {deck.cards.length}</h2>
      <button type="button" onClick={drawCardAndDeductChips} disabled={!canDrawNextCard()}>Draw a card ({nextCardPrice}€)</button>
    </div>
  );
}

export default Hand;
