import type { ReactNode } from "react";
import { PokerPadsWrapperStyles } from "./PokerPadsWrapper.styles.ts";
import PokerPad from "../PokerPad/PokerPad.tsx";
import { useAppContext } from "../../hooks/states/useAppContext.ts";
import Button from "../Button/Button.tsx";
import useDigits from "../../hooks/utils/useDigits.utils.ts";

function PokerPads(): ReactNode {
	const { pokerPads, buyPokerPad, nextPokerPadPrice } = useAppContext();
	const formatedNextPokerPadPrice = useDigits({
		value: nextPokerPadPrice,
		digits: 0,
	});

	return (
		<PokerPadsWrapperStyles>
			{pokerPads.map((pad, index) => (
				<PokerPad key={`${pad.uid}-${index}`} id={index} />
			))}
			<p>
				<i>(Play card combinations to increase your Chips per click bonus!)</i>
			</p>
			<Button
				label={`Add Poker Pad (${formatedNextPokerPadPrice}€)`}
				onClick={buyPokerPad}
			/>
		</PokerPadsWrapperStyles>
	);
}

export default PokerPads;
