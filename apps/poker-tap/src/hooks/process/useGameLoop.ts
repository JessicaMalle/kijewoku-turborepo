import { type Dispatch, useEffect, useRef } from "react";
import { AUTOSAVE_INTERVAL, GLOBAL_INTERVAL } from "../../config/gameConfig.ts";
import type { Action, GameState } from "../../context/GameContext.ts";
import { SaveService } from "../../services/SaveService.ts";
import ItemsService from "../../services/ItemsService.ts";

const useGameLoop = (state: GameState, dispatch: Dispatch<Action>) => {
	const animationFrameRef = useRef<number | null>(null);
	const stateRef = useRef(state);
	const dispatchRef = useRef(dispatch);
	const accumulatedSaveTimeRef = useRef<number>(0);
	const accumulatedUpdateTimeRef = useRef<number>(0);

	useEffect(() => {
		stateRef.current = state;
		dispatchRef.current = dispatch;
	}, [state, dispatch]);

	const saveGame = () => SaveService.saveGame(stateRef.current);

	const updateResources = () => {
		const totalBonus = ItemsService.getTotalBonus(stateRef.current.items);
		if (totalBonus > 0) {
			dispatchRef.current({
				type: "AUTO_CLICK",
				payload: totalBonus,
			});
		}
	};

	useEffect(() => {
		let lastFrameTime = performance.now();

		const gameLoop = (timestamp: number) => {
			const deltaTime = timestamp - lastFrameTime;
			lastFrameTime = timestamp;

			accumulatedSaveTimeRef.current += deltaTime;
			accumulatedUpdateTimeRef.current += deltaTime;

			if (accumulatedSaveTimeRef.current >= AUTOSAVE_INTERVAL) {
				saveGame();
				accumulatedSaveTimeRef.current = 0; // Réinitialisation du compteur
			}

			if (accumulatedUpdateTimeRef.current >= GLOBAL_INTERVAL) {
				updateResources();
				accumulatedUpdateTimeRef.current = 0; // Réinitialisation du compteur
			}

			animationFrameRef.current = requestAnimationFrame(gameLoop);
		};

		animationFrameRef.current = requestAnimationFrame(gameLoop);

		return () => {
			if (animationFrameRef.current !== null) {
				cancelAnimationFrame(animationFrameRef.current);
			}
		};
	}, []);
};

export default useGameLoop;
