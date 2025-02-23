import type {ReactNode} from "react";
import {useDeck} from "../../hooks/states/useDeck.ts";
import {useGame} from "../../hooks/states/useGame.tsx";
import {Rest, StyledCardBack} from "./Deck.styles.ts";

function Deck(): ReactNode {
  const { drawCardAndDeductChips } = useGame();
  const { deck, revealDeck, nextCardPrice, canDrawNextCard } = useDeck();

  return (
    <div>
      <StyledCardBack>
        <Rest>{deck.cards.length}</Rest>
        <button type="button" onClick={drawCardAndDeductChips} disabled={!canDrawNextCard()}>
          Draw a card ({nextCardPrice}€)
        </button>
        <button type="button" onClick={() => revealDeck(deck)}>
          Reveal Deck
        </button>
      </StyledCardBack>
    </div>
  );
}

export default Deck;
