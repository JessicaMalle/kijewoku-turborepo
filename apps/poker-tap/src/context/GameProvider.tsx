import type React from 'react';
import { useReducer } from 'react';
import {GameContext, type GameState} from "./GameContext.ts";
import { GameReducer } from './GameReducer.ts';

const initialGameState: GameState = {
  chips: 0,
  hands: 1,
  clickerBonus: 1,
};

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(GameReducer, initialGameState);

  // Actions
  const addChips = (chips: number) =>
    dispatch({ type: "ADD_CHIPS", payload: chips });

  const buyHand = () =>
    dispatch({ type: "BUY_HAND" });

  const addClickerBonus = (bonus: number) =>
    dispatch({ type: "ADD_CLICKER_BONUS", payload: bonus });

  return (
    <GameContext.Provider value={{
      ...state,
      addChips,
      buyHand,
      addClickerBonus
    }}>
      {children}
    </GameContext.Provider>
  );
};
