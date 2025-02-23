import type React from 'react';
import {useRef} from 'react';
import {useEffect} from 'react';
import { useReducer } from 'react';
import ChipsService from "../services/ChipsService.ts";
import DeckService from "../services/DeckService.ts";
import PokerPadService from "../services/PokerPadService.ts";
import {SaveService} from "../services/SaveService.ts";
import type {Deck} from "../types/gameTypes.ts";
import {GameContext, type GameState} from "./GameContext.ts";
import { GameReducer } from './GameReducer.ts';

const initialGameState: GameState = {
  chips: 0,
  prevChips: 0,
  hand: { Cards: [], firstPickMade: false },
  deck: DeckService.shuffleDeck(DeckService.createDeck()),
  pokerPads: SaveService.initializePokerPads(),
  croupiers: [],
};

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(GameReducer, SaveService.loadGame(initialGameState));
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

      if (elapsedUpdate >= 1000) {
        updateChips();
        lastUpdateTimeRef.current = now;
      }

      if (elapsedSave >= 10000) {
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
  }, [state]);

  // Actions
  const addChips = () =>
    dispatch({ type: "ADD_CHIPS" });

  const buyPokerPad = () => {
    dispatch({ type: "BUY_POKER_PAD" });
  };

  const nextPokerPadPrice = PokerPadService.calculatePokerPadCost(state.pokerPads.length)

  const shuffleDeck = () =>
    dispatch({ type: 'SHUFFLE_DECK' });

  const revealDeck = (deck: Deck) => DeckService.revealDeck(deck);

  const drawCard = (numberOfCardsToDraw = 1) =>
    dispatch({ type: 'DRAW_CARD', payload: numberOfCardsToDraw })

  const drawCardAndDeductChips = () => {
    dispatch({type: 'DRAW_CARD_AND_DEDUCT_CHIPS'})
  }

  const toggleSelectedCard = (uid: string) =>
    dispatch({ type: 'TOGGLE_SELECTED_HAND_CARD', payload: uid });

  const placeCardsOnTable = (index: number) => dispatch({ type: "PLACE_CARDS_ON_TABLE", payload: index });

  const getTotalBonus = () => ChipsService.getTotalBonus(state.pokerPads)

  const buyCroupier = () => {
    dispatch({ type: "BUY_CROUPIER" });
  };

  return (
    <GameContext.Provider value={{
      ...state,
      addChips,
      buyPokerPad,
      nextPokerPadPrice,
      shuffleDeck,
      revealDeck,
      drawCard,
      drawCardAndDeductChips,
      toggleSelectedCard,
      placeCardsOnTable,
      getTotalBonus,
      buyCroupier,
    }}>
      {children}
    </GameContext.Provider>
  );
};
