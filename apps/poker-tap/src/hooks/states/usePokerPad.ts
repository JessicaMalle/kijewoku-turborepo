import { useEffect, useState } from "react";
import PokerPadService from "../../services/PokerPadService.ts";
import { useAppContext } from "./useAppContext.ts";

export const usePokerPad = (index: number) => {
	const { pokerPads, playedPokerPads, placeCardOnTable, markPokerPadAsPlayed } =
		useAppContext();

	const pokerPad = pokerPads[index];

	const [detectedHand, setDetectedHand] = useState<string>("");
	const [handScore, setHandScore] = useState<number>(0);

	const handleMarkPokerPadAsPlayed = () => {
		markPokerPadAsPlayed(index);
	};

	useEffect(() => {
		if (!pokerPad?.cards) return;

		const hand = PokerPadService.detectPokerHand(pokerPad.cards);
		setDetectedHand(hand);

		const score = PokerPadService.getPokerHandScore(pokerPad.cards);
		setHandScore(score);
	}, [pokerPad?.cards]);

	return {
		pokerPad,
		pokerPads,
		playedPokerPads,
		placeCardOnTable,
		detectedHand,
		handScore,
		markPokerPadAsPlayed: handleMarkPokerPadAsPlayed,
	};
};
