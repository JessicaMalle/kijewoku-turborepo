import type React from "react";
import { useCallback, useEffect, useRef, useState } from "react";
import {
	GameLoopContext,
	type StartCallback,
	type UpdateCallback,
} from "./gameLoopContext.tsx";

export const GameLoopProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [isRunning, setIsRunning] = useState<boolean>(false);
	const startCallbacksRef = useRef<Set<StartCallback>>(new Set());
	const updateCallbacksRef = useRef<Map<string, UpdateCallback>>(new Map());
	const lastTimeRef = useRef<number | null>(null);
	const requestIdRef = useRef<number | null>(null);

	const gameLoop = useCallback(
		(timestamp: number) => {
			if (!isRunning) return;

			const deltaTime = lastTimeRef.current
				? (timestamp - lastTimeRef.current) / 1000
				: 0;
			lastTimeRef.current = timestamp;

			for (const callback of updateCallbacksRef.current.values()) {
				callback(deltaTime);
			}

			requestIdRef.current = requestAnimationFrame(gameLoop);
		},
		[isRunning],
	);

	const play = useCallback(() => {
		if (isRunning) return;

		setIsRunning(true);
		lastTimeRef.current = null;
		requestIdRef.current = requestAnimationFrame(gameLoop);
	}, [isRunning, gameLoop]);

	const pause = useCallback(() => {
		if (!isRunning) return;

		setIsRunning(false);
		if (requestIdRef.current) {
			cancelAnimationFrame(requestIdRef.current);
			requestIdRef.current = null;
		}
	}, [isRunning]);

	const start = useCallback(
		(callback: StartCallback) => {
			startCallbacksRef.current.add(callback);
			// Exécuter immédiatement si l'app est déjà lancée
			if (isRunning) {
				callback();
			}
		},
		[isRunning],
	);

	const update = useCallback((callback: UpdateCallback, id: string) => {
		updateCallbacksRef.current.set(id, callback);
	}, []);

	const removeUpdate = useCallback((id: string) => {
		updateCallbacksRef.current.delete(id);
	}, []);

	useEffect(() => {
		if (isRunning) {
			for (const callback of startCallbacksRef.current) callback();
			requestIdRef.current = requestAnimationFrame(gameLoop);
		} else if (requestIdRef.current) {
			cancelAnimationFrame(requestIdRef.current);
			requestIdRef.current = null;
		}
	}, [isRunning, gameLoop]);

	useEffect(() => {
		return () => {
			if (requestIdRef.current) {
				cancelAnimationFrame(requestIdRef.current);
				requestIdRef.current = null;
			}
		};
	}, []);

	const value = {
		play,
		pause,
		start,
		update,
		removeUpdate,
		isRunning,
	};

	return (
		<GameLoopContext.Provider value={value}>
			{children}
		</GameLoopContext.Provider>
	);
};
