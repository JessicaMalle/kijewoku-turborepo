import type { ReactNode } from "react";
import { useHand } from "../../hooks/states/useHand.ts";
import type { Card as CardType, CardColor } from "../../types/gameTypes.ts";
import {
	BigCardValue,
	CardSuit,
	CardValue,
	StyledCard,
	SuitAndValueWrapper,
} from "./Card.styles.ts";
import { useDragAndDrop } from "../../hooks/utils/useDragAndDrop.utils.ts";
import { useTiltEffect } from "../../hooks/styles/useTiltEffect.ts";
import DicierIcon from "../DicierIcon/DicierIcon.tsx";

function Card({
	uid,
	color,
	value,
	active,
	isDraggable = false,
}: CardType): ReactNode {
	const suitCodes: Record<CardColor, string> = {
		spades: "SPADES",
		hearts: "HEARTS",
		clover: "CLUBS",
		diamonds: "DIAMONDS",
	};

	const { toggleSelectedCard, forceHandOpen, setDraggingCardUid } = useHand();

	const {
		elementRef: dragRef,
		handleMouseDown,
		handleTouchStart,
		isDragging,
		hasDragged,
	} = useDragAndDrop({
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
			$active={active ? "true" : undefined}
			$isDraggable={isDraggable}
			onClick={() => {
				if (!hasDragged.current) {
					toggleSelectedCard(uid);
				}
			}}
		>
			<SuitAndValueWrapper>
				<CardValue>{value}</CardValue>
				<CardSuit>
					<DicierIcon
						code={suitCodes[color]}
						size="20px"
						mode="Flat"
						weight="Dark"
					/>
				</CardSuit>
			</SuitAndValueWrapper>
			<BigCardValue color={color} value={value}>
				{value}
			</BigCardValue>
		</StyledCard>
	);
}

export default Card;
