import { useState, useEffect, type ReactNode } from "react";
import { useHand } from "../../hooks/states/useHand.ts";
import Card from "../Card/Card.tsx";
import { StyledHand, StyledCard } from "./Hand.styles.ts";

function Hand(): ReactNode {
  const { hand } = useHand();

  const totalArc = 10;
  const baseTranslation = 20;
  const multiplier = 1.5;

  const [angles, setAngles] = useState<number[]>([]);
  const [translations, setTranslations] = useState<number[]>([]);

  useEffect(() => {
    if (hand.Cards.length === 0) {
      setAngles([]);
      setTranslations([]);
      return;
    }

    if (hand.Cards.length === 1) {
      setAngles([0]);
      setTranslations([0]);
      return;
    }

    const newAngles = hand.Cards.map((_, i) =>
      hand.Cards.length > 1
        ? totalArc / (hand.Cards.length - 1) * i - totalArc / 2
        : 0
    );

    const newTranslations = hand.Cards.map((_, i) => {
      const distanceFromCenter = Math.abs((hand.Cards.length - 1) / 2 - i);
      const adjustedBaseTranslation = baseTranslation * 0.85;
      return -(adjustedBaseTranslation - distanceFromCenter ** 1.5 * (adjustedBaseTranslation / (hand.Cards.length - 1)) * multiplier);
    });

    setAngles(newAngles);
    setTranslations(newTranslations);
  }, [hand, hand.Cards.length]);

  if (hand.Cards.length === 0) return null;

  return (
    <StyledHand>
      {hand.Cards.map((card, index) => (
        <StyledCard
          key={`hand-card-${card.color}-${card.value}-i${index}`}
          style={{
            transform: `
              rotate(${angles[index]}deg) 
              translateY(${translations[index]}px)
            `,
          }}
        >
          <Card isDraggable {...card} />
        </StyledCard>
      ))}
    </StyledHand>
  );
}

export default Hand;
