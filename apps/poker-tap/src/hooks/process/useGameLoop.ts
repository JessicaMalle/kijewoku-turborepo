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

	const idRef = useRef<string>(
		`component-${Math.random().toString(36).substr(2, 9)}`,
	);

	useEffect(() => {
		return () => {
			context.removeUpdate(idRef.current);
		};
	}, [context]);

	const wrappedUpdate = useCallback(
		(callback: UpdateCallback) => {
			context.update(callback, idRef.current);
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
