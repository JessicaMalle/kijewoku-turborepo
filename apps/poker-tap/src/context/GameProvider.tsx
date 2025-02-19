import type React from 'react';
import {useEffect} from 'react';
import { useReducer } from 'react';
import DeckService from "../services/DeckService.ts";
import {SaveService} from "../services/SaveService.ts";
import type {Deck} from "../types/gameTypes.ts";
import {GameContext, type GameState} from "./GameContext.ts";
import { GameReducer } from './GameReducer.ts';

const initialGameState: GameState = {
  chips: 0,
  hand: { handCards: [] },
  deck: DeckService.shuffleDeck(DeckService.createDeck()),
};

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(GameReducer, SaveService.loadGame(initialGameState));

  // Save at any state changes
  useEffect(() => {
    SaveService.saveGame(state);
  }, [state]);

  // Actions
  const addChips = (chips: number) =>
    dispatch({ type: "ADD_CHIPS", payload: chips });

  const shuffleDeck = () =>
    dispatch({ type: 'SHUFFLE_DECK' });

  const revealDeck = (deck: Deck) => DeckService.revealDeck(deck);

  const drawHand = () =>
    dispatch({ type: 'DRAW_HAND' })

  const toggleSelectedHandCard = (cardIndex: number) =>
    dispatch({ type: 'TOGGLE_SELECTED_HAND_CARD', payload: cardIndex });

  return (
    <GameContext.Provider value={{
      ...state,
      addChips,
      shuffleDeck,
      revealDeck,
      drawHand,
      toggleSelectedHandCard,
    }}>
      {children}
    </GameContext.Provider>
  );
};
