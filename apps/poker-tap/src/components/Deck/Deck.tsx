import type {ReactNode} from "react";
import {useDeck} from "../../hooks/states/useDeck.ts";
import {useGame} from "../../hooks/states/useGame.tsx";
import {Rest, StyledCardBack} from "./Deck.styles.ts";
import Button from "../Button/Button.tsx";
import {useAnimation} from "@kijewoku/hooks/animation";

function Deck(): ReactNode {
  const { drawCardAndDeductChips } = useGame();
  const { deck, revealDeck, nextCardPrice, canDrawNextCard } = useDeck();

  const mouseDownAnimationRef = useAnimation({
    keyframes: [
      { transform: 'scale(1) rotate(0deg)' },
      { transform: 'scale(0.95) rotate(-3deg)' },
    ],
    options: {
      duration: 200,
      easing: 'ease-out',
      fill: 'forwards',
    },
    eventType: 'mousedown',
  });

  const mouseUpAnimationRef = useAnimation({
    keyframes: [
      { transform: 'scale(1) rotate(0deg)' },
      { transform: 'scale(1.05) rotate(2deg)' },
      { transform: 'scale(1) rotate(0deg)' },
    ],
    options: {
      duration: 250,
      easing: 'ease-out',
      fill: 'forwards',
    },
    eventType: 'mouseup',
  });

  const mouseEnterAnimationRef = useAnimation({
    keyframes: [
      { transform: 'scale(1) rotate(0deg)' },
      { transform: 'scale(1.05) rotate(3deg)' },
      { transform: 'scale(1) rotate(0deg)' },
    ],
    options: {
      duration: 500,
      easing: 'ease-in-out',
    },
    eventType: 'mouseenter',
  });

  const mouseLeaveAnimationRef = useAnimation({
    keyframes: [
      { transform: 'scale(1) rotate(0deg)' },
      { transform: 'scale(0.95) rotate(-2deg)' },
      { transform: 'scale(1) rotate(0deg)' },
    ],
    options: {
      duration: 500,
      easing: 'ease-in-out',
    },
    eventType: 'mouseleave',
  });

  return (
    <div>
      <StyledCardBack
        ref={element => {
          mouseDownAnimationRef.current = element;
          mouseUpAnimationRef.current = element;
          mouseEnterAnimationRef.current = element;
          mouseLeaveAnimationRef.current = element;
        }}
        onClick={drawCardAndDeductChips}
      />
      <Rest>{deck.cards.length}</Rest>
      <p>Price of the next draw ({nextCardPrice}€)</p>
      <p>{!canDrawNextCard && 'Not enough Chips'}</p>
      <Button label={'Reveal Deck'} onClick={() => revealDeck(deck)}/>
    </div>
  );
}

export default Deck;
