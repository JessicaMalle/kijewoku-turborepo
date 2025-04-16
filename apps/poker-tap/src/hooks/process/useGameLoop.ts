import { useCallback, useContext, useEffect, useRef } from "react";
import {
	GameLoopContext,
	type UpdateCallback,
} from "../../context/game-loop/gameLoopContext.tsx";

export function useGameLoop() {
	const context = useContext(GameLoopContext);
	if (context === undefined) {
		throw new Error("useGameLoop must be used within a GameLoopProvider");
	}

	const { current } = useRef<string>(
		`component-${Math.random().toString(36).slice(2, 11)}`,
	);

	useEffect(() => {
		return () => {
			context.removeUpdate(current);
		};
	}, [context]);

	const wrappedUpdate = useCallback(
		(callback: UpdateCallback) => {
			context.update(callback, current);
		},
		[context],
	);

	return {
		play: context.play,
		pause: context.pause,
		start: context.start,
		update: wrappedUpdate,
		isRunning: context.isRunning,
	};
}
