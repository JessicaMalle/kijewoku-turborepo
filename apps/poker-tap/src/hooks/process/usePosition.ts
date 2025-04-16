import { useContext, useEffect, useState } from "react";
import { PositionContext } from "../../context/PositionStore.tsx";
import { useHand } from "../states/useHand.ts";

export const usePosition = () => {
	const context = useContext(PositionContext);
	const { clearDraggingCardUid } = useHand();

	if (!context) {
		throw new Error("usePosition must be used within a PositionProvider");
	}

	const [isMouseUp, setIsMouseUp] = useState(false);
	const [isFingerLifted, setIsFingerLifted] = useState(false);

	useEffect(() => {
		if (isMouseUp || isFingerLifted) {
			clearDraggingCardUid();
		}
	}, [isMouseUp, isFingerLifted]);

	useEffect(() => {
		const handleMouseUp = () => {
			setIsMouseUp(true);
			setIsFingerLifted(true);
		};

		const handleMouseDown = () => {
			setIsMouseUp(false);
			setIsFingerLifted(false);
		};

		const handleTouchEnd = () => {
			setIsMouseUp(true);
			setIsFingerLifted(true);
		};

		const handleTouchStart = () => {
			setIsMouseUp(false);
			setIsFingerLifted(false);
		};

		document.addEventListener("mouseup", handleMouseUp);
		document.addEventListener("mousedown", handleMouseDown);
		document.addEventListener("touchend", handleTouchEnd);
		document.addEventListener("touchstart", handleTouchStart);

		return () => {
			document.removeEventListener("mouseup", handleMouseUp);
			document.removeEventListener("mousedown", handleMouseDown);
			document.removeEventListener("touchend", handleTouchEnd);
			document.removeEventListener("touchstart", handleTouchStart);
		};
	}, []);

	return {
		position: context.position,
		isMouseUp,
		isFingerLifted,
	};
};
