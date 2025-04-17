import type { ReactNode } from "react";
import { useHand } from "../../hooks/states/useHand.ts";
import type { Card as CardType } from "../../types/gameTypes.ts";
import {
	BigCardValue,
	CardSuit,
	CardValue,
	StyledCard,
	SuitAndValueWrapper,
} from "./Card.styles.ts";
import { useDragAndDrop } from "../../hooks/utils/useDragAndDrop.utils.ts";
import {useTiltEffect} from "../../hooks/styles/useTiltEffect.ts";

function Card({
	uid,
	color,
	value,
	active,
	isDraggable = false,
}: CardType): ReactNode {
	const suitSymbols: Record<string, string> = {
		spades: "♠",
		hearts: "♥",
		clover: "♣",
		diamonds: "♦",
	};

	const { toggleSelectedCard, forceHandOpen, setDraggingCardUid } = useHand();

	const { elementRef: dragRef, handleMouseDown, handleTouchStart, isDragging } =
		useDragAndDrop({
			isDraggable,
			onDragStart: () => {
				setDraggingCardUid(uid);
				forceHandOpen(true);
			},
			onDragEnd: () => {
				forceHandOpen(false);
			},
		});

	const { elementRef: tiltRef } = useTiltEffect({
		max: 20,
		perspective: 800,
		scale: 1.03,
		speed: 400,
		glareMaxOpacity: 0.4,
		glareColor: "rgba(255, 255, 255, 0.7)",
		gyroscope: true, // (beta)
	});

	// Combined refs
	const setRefs = (element: HTMLDivElement) => {
		if (dragRef) {
				dragRef.current = element;
		}
		if (tiltRef) {
			tiltRef.current = element;
		}
	};

	return (
		<StyledCard
			ref={setRefs}
			onMouseDown={handleMouseDown}
			onTouchStart={handleTouchStart}
			$isDragging={isDragging}
			color={color}
			active={active ? "true" : undefined}
			$isDraggable={isDraggable}
			onClick={() => toggleSelectedCard(uid)}
		>
			<SuitAndValueWrapper>
				<CardValue>{value}</CardValue>
				<CardSuit>{suitSymbols[color]}</CardSuit>
			</SuitAndValueWrapper>
			<BigCardValue color={color} value={value}>
				{value}
			</BigCardValue>
		</StyledCard>
	);
}

export default Card;
