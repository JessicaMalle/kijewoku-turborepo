import { useEffect, useState, useCallback } from "react";

interface UseReleaseDetectionOptions {
	onRelease?: () => void;
	targetElement?: HTMLElement | null;
	preventDefault?: boolean;
}

const useReleaseDetection = ({
	onRelease,
	targetElement = null,
	preventDefault = false,
}: UseReleaseDetectionOptions = {}) => {
	const [isPressed, setIsPressed] = useState(false);
	const [pointerId, setPointerId] = useState<number | null>(null);

	const handleRelease = useCallback(() => {
		if (onRelease) {
			onRelease();
		}
	}, [onRelease]);

	useEffect(() => {
		const target = targetElement || document;

		const handlePointerDown = (e: Event) => {
			const pointerEvent = e as PointerEvent;

			if (preventDefault) {
				e.preventDefault();
			}

			setIsPressed(true);
			setPointerId(pointerEvent.pointerId);

			if (target instanceof Element) {
				target.setPointerCapture(pointerEvent.pointerId);
			}
		};

		const handlePointerUp = (e: Event) => {
			const pointerEvent = e as PointerEvent;

			if (preventDefault) {
				e.preventDefault();
			}

			if (
				isPressed &&
				(pointerId === null || pointerEvent.pointerId === pointerId)
			) {
				handleRelease();
				setIsPressed(false);
				setPointerId(null);
			}
		};

		const handlePointerCancel = (e: Event) => {
			const pointerEvent = e as PointerEvent;

			if (pointerEvent.pointerId === pointerId) {
				setIsPressed(false);
				setPointerId(null);
			}
		};

		const handlePointerLeave = (e: Event) => {
			const pointerEvent = e as PointerEvent;

			if (
				!(target instanceof Element) ||
				!target.hasPointerCapture(pointerEvent.pointerId)
			) {
				if (pointerEvent.pointerId === pointerId) {
					setIsPressed(false);
					setPointerId(null);
				}
			}
		};

		const options = preventDefault ? { passive: false } : undefined;

		target.addEventListener("pointerdown", handlePointerDown, options);
		target.addEventListener("pointerup", handlePointerUp, options);
		target.addEventListener("pointercancel", handlePointerCancel);
		target.addEventListener("pointerleave", handlePointerLeave);

		return () => {
			target.removeEventListener("pointerdown", handlePointerDown);
			target.removeEventListener("pointerup", handlePointerUp);
			target.removeEventListener("pointercancel", handlePointerCancel);
			target.removeEventListener("pointerleave", handlePointerLeave);
		};
	}, [isPressed, pointerId, handleRelease, targetElement, preventDefault]);

	return { isPressed };
};

export default useReleaseDetection;
