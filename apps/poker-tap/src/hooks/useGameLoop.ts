import { useEffect, useRef } from 'react';
import {AUTOSAVE_INTERVAL, GLOBAL_INTERVAL} from "../config/gameConfig.ts";
import type { Action, GameState } from '../context/GameContext.ts';
import { SaveService } from '../services/SaveService.ts';

const useGameLoop = (state: GameState, dispatch: React.Dispatch<Action>) => {
  const animationFrameRef = useRef<number | null>(null);
  const lastUpdateTimeRef = useRef<number>(Date.now());
  const lastSaveTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const updateChips = () => {
      dispatch({ type: "ADD_CHIPS_BY_CROUPIERS" });
    };

    const saveGame = () => {
      SaveService.saveGame(state);
    };

    const gameLoop = () => {
      const now = Date.now();
      const elapsedUpdate = now - lastUpdateTimeRef.current;
      const elapsedSave = now - lastSaveTimeRef.current;

      if (elapsedUpdate >= GLOBAL_INTERVAL) {
        updateChips();
        lastUpdateTimeRef.current = now;
      }

      if (elapsedSave >= AUTOSAVE_INTERVAL) {
        saveGame();
        lastSaveTimeRef.current = now;
      }

      animationFrameRef.current = requestAnimationFrame(gameLoop);
    };

    animationFrameRef.current = requestAnimationFrame(gameLoop);

    return () => {
      if (animationFrameRef.current !== null) {
        cancelAnimationFrame(animationFrameRef.current);
      }
    };
  }, [state, dispatch]);
};

export default useGameLoop;
