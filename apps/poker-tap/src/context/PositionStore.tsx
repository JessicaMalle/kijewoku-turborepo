import type React from "react";
import { createContext, useState, useEffect } from "react";

interface Position {
	x: number;
	y: number;
}

type PositionContextType = {
	position: Position;
};

const PositionContext = createContext<PositionContextType>({
	position: { x: 0, y: 0 },
});

const PositionProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [position, setPosition] = useState<Position>({
		x: 0,
		y: 0,
	});

	useEffect(() => {
		const isTouchDevice =
			"ontouchstart" in window || navigator.maxTouchPoints > 0;
		const isMouseDevice = window.matchMedia("(pointer: fine)").matches;

		const isMouseEvent = (event: Event): event is MouseEvent =>
			event instanceof MouseEvent;

		const isTouchEvent = (event: Event): event is TouchEvent =>
			event instanceof TouchEvent;

		const extractCoordinates = (event: Event): { x: number; y: number } => {
			if (isMouseEvent(event)) {
				return { x: event.clientX, y: event.clientY };
			}

			if (isTouchEvent(event)) {
				const touch = event.touches[0] || event.changedTouches[0];
				return { x: touch.clientX, y: touch.clientY };
			}

			return { x: 0, y: 0 };
		};

		const handleMove = (event: Event) => {
			const { x, y } = extractCoordinates(event);
			setPosition((prev) => ({ ...prev, x, y }));
		};

		const events: Array<
			[string, (event: Event) => void, AddEventListenerOptions?]
		> =
			isTouchDevice || !isMouseDevice
				? [["touchmove", handleMove, { passive: true }]]
				: [["mousemove", handleMove, { passive: true }]];

		for (const [eventName, handler, options] of events) {
			window.addEventListener(eventName, handler, options);
		}

		return () => {
			for (const [eventName, handler] of events) {
				window.removeEventListener(eventName, handler);
			}
		};
	}, []);

	return (
		<PositionContext.Provider value={{ position }}>
			{children}
		</PositionContext.Provider>
	);
};

export { PositionProvider, PositionContext };
