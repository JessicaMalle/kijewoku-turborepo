import type {ReactNode} from "react";
import {useHand} from "../../hooks/states/useHand.ts";
import type {Card as CardType} from "../../types/gameTypes.ts";
import {CardSuit, CardValue, StyledCard } from "./Card.styles.ts";

function Card({uid, color, value, active }: CardType): ReactNode {
  const suitSymbols: Record<string, string> = {
    spades: '♠',
    hearts: '♥',
    clover: '♣',
    diamonds: '♦'
  };

  const {toggleSelectedCard} = useHand();

  return (
    <StyledCard
      color={color}
      active={active ? "true" : undefined}
      onClick={() => toggleSelectedCard(uid)}
    >
      <CardValue>{value}</CardValue>
      <CardSuit>{suitSymbols[color]}</CardSuit>
      <CardValue>{value}</CardValue>
    </StyledCard>
  );
}

export default Card;
