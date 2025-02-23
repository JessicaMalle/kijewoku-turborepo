import type React from 'react';
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
  hand: { handCards: [], firstPickMade: false },
  deck: DeckService.shuffleDeck(DeckService.createDeck()),
  pokerPads: SaveService.initializePokerPads(),
};

export const GameProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(GameReducer, SaveService.loadGame(initialGameState));

  // Save at any state changes
  useEffect(() => {
    SaveService.saveGame(state);
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

  const toggleSelectedHandCard = (cardIndex: number) =>
    dispatch({ type: 'TOGGLE_SELECTED_HAND_CARD', payload: cardIndex });

  const placeCardsOnTable = (index: number) => dispatch({ type: "PLACE_CARDS_ON_TABLE", payload: index });

  const getTotalBonus = () => ChipsService.getTotalBonus(state.pokerPads)

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
      toggleSelectedHandCard,
      placeCardsOnTable,
      getTotalBonus,
    }}>
      {children}
    </GameContext.Provider>
  );
};
