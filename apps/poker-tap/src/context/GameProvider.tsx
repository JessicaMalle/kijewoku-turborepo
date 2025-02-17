import type React from 'react';
import { useReducer } from 'react';
import DeckService from "../services/DeckService.ts";
import type {Deck} from "../types/gameTypes.ts";
import {GameContext, type GameState} from "./GameContext.ts";
import { GameReducer } from './GameReducer.ts';

const initialGameState: GameState = {
  chips: 0,
  hand: { cards: [] },
  deck: DeckService.shuffleDeck(DeckService.createDeck()),
};

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(GameReducer, initialGameState);

  // Actions
  const addChips = (chips: number) =>
    dispatch({ type: "ADD_CHIPS", payload: chips });

  const shuffleDeck = () =>
    dispatch({ type: 'SHUFFLE_DECK' });

  const revealDeck = (deck: Deck) => DeckService.revealDeck(deck);

  const drawHand = () =>
    dispatch({ type: 'DRAW_HAND' })

  return (
    <GameContext.Provider value={{
      ...state,
      addChips,
      shuffleDeck,
      revealDeck,
      drawHand,
    }}>
      {children}
    </GameContext.Provider>
  );
};
