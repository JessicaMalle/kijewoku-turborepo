import type {ReactNode} from "react";
import {useHand} from "../../hooks/states/useHand.ts";
import type {HandCard} from "../../types/gameTypes.ts";
import {CardSuit, CardValue, StyledCard } from "./Card.styles.ts";

interface CardProps extends HandCard {
  index: number;
}

function Card({color, value, active, index }: CardProps): ReactNode {
  const suitSymbols: Record<string, string> = {
    spades: '♠',
    hearts: '♥',
    clover: '♣',
    diamonds: '♦'
  };

  const {toggleSelectedHandCard} = useHand();

  return (
    <StyledCard color={color} active={active} onClick={() => toggleSelectedHandCard(index)}>
      <CardValue>{value}</CardValue>
      <CardSuit>{suitSymbols[color]}</CardSuit>
      <CardValue>{value}</CardValue>
    </StyledCard>
  );
}

export default Card;
