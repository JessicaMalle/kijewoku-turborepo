import type {ReactNode} from "react";
import {useDeck} from "../../hooks/states/useDeck.ts";
import {useGame} from "../../hooks/states/useGame.tsx";
import {Rest, StyledCardBack} from "./Deck.styles.ts";
import Button from "../Button/Button.tsx";

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
      <Button label={'Reveal Deck'} onClick={() => revealDeck(deck)}/>
    </div>
  );
}

export default Deck;
