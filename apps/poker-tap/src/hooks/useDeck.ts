import { useGame } from './useGame';

export const useDeck = () => {
  const { deck, shuffleDeck, revealDeck } = useGame();

  return {
    deck,
    shuffleDeck,
    revealDeck,
  };
};
