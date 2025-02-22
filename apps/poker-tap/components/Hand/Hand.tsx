import type {ReactNode} from "react";
import {useDeck} from "../../src/hooks/useDeck.ts";
import {useHand} from "../../src/hooks/useHand";
import Card from "../Card/Card";
import {StyledHand} from "./Hand.styles";

function Hand(): ReactNode {
  const { hand, drawCard } = useHand();
  const { deck } = useDeck();

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
      <button type="button" onClick={() => drawCard()}>Draw 1 card</button>
      <button type="button" onClick={() => drawCard(2)}>Draw 2 cards</button>
      <button type="button" onClick={() => drawCard(5)}>Draw 5 cards</button>
    </div>
  );
}

export default Hand;
