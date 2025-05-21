// This hook has been deprecated as we now use a single pokerPad directly from useAppContext
// Keeping this file as a placeholder in case we need to reimplement similar functionality in the future

import { useAppContext } from "./useAppContext.ts";

export const usePokerPad = () => {
	// Simply return the relevant parts from useAppContext
	const { pokerPad, playedPokerPads, placeCardOnTable } = useAppContext();

	return {
		pokerPad,
		playedPokerPads,
		placeCardOnTable,
	};
};
