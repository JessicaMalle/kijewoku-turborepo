import { useGame } from './useGame';

export const useDeck = () => {
  const { deck, hand, shuffleDeck, drawCard, placeCardUnderDeck, revealDeck } = useGame();

  return {
    deck,
    hand,
    shuffleDeck,
    drawCard,
    placeCardUnderDeck,
    revealDeck,
  };
};
