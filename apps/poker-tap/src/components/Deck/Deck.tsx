import type {ReactNode} from "react";
import {useDeck} from "../../hooks/states/useDeck.ts";
import {useGame} from "../../hooks/states/useGame.tsx";
import {Rest, StyledCardBack} from "./Deck.styles.ts";

function Deck(): ReactNode {
  const { drawCardAndDeductChips } = useGame();
  const { deck, revealDeck, nextCardPrice, canDrawNextCard } = useDeck();

  return (
    <div>
      <StyledCardBack onClick={drawCardAndDeductChips}>
        <Rest>{deck.cards.length}</Rest>
        <p>Draw a card ({nextCardPrice}€)</p>
      </StyledCardBack>
      <p>{!canDrawNextCard && 'Not enough Chips'}</p>
      <button type="button" onClick={() => revealDeck(deck)}>
        Reveal Deck
      </button>
    </div>
  );
}

export default Deck;
