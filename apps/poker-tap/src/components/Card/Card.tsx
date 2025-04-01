import type {ReactNode} from "react";
import {useHand} from "../../hooks/states/useHand.ts";
import type {Card as CardType} from "../../types/gameTypes.ts";
import {BigCardValue, CardSuit, CardValue, StyledCard, SuitAndValueWrapper} from "./Card.styles.ts";

function Card({uid, color, value, active, isDraggable }: CardType): ReactNode {
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
      isDraggable={isDraggable}
      onClick={() => toggleSelectedCard(uid)}
    >
      <SuitAndValueWrapper>
        <CardValue>{value}</CardValue>
        <CardSuit>{suitSymbols[color]}</CardSuit>
      </SuitAndValueWrapper>
      <BigCardValue color={color} value={value}>{value}</BigCardValue>
    </StyledCard>
  );
}

export default Card;
