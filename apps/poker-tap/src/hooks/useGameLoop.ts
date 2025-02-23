import { useEffect, useRef } from 'react';
import {AUTOSAVE_INTERVAL, GLOBAL_INTERVAL} from "../config/gameConfig.ts";
import type { Action, GameState } from '../context/GameContext.ts';
import { SaveService } from '../services/SaveService.ts';

const useGameLoop = (state: GameState, dispatch: React.Dispatch<Action>) => {
  const animationFrameRef = useRef<number | null>(null);
  const lastSaveTimeRef = useRef<number>(Date.now());
  const lastCursorUpdateTimeRef = useRef<number>(Date.now());

  useEffect(() => {
    const gameLoop = () => {
      const now = Date.now();
      const elapsedSave = now - lastSaveTimeRef.current;
      const elapsedCursorUpdate = now - lastCursorUpdateTimeRef.current;

      if (elapsedSave >= AUTOSAVE_INTERVAL) {
        SaveService.saveGame(state);

        lastSaveTimeRef.current = now;
      }

      if (elapsedCursorUpdate >= GLOBAL_INTERVAL) {
        dispatch({ type: "ADD_CHIPS_BY_CURSORS" });
        dispatch({ type: "ADD_CHIPS_BY_CROUPIERS" });

        lastCursorUpdateTimeRef.current = now;
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
