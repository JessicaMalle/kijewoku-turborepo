import type { ReactNode } from "react";
import { PokerPadsWrapperStyles } from "./PokerPadsWrapper.styles.ts";
import PokerPad from "../PokerPad/PokerPad.tsx";
import { useAppContext } from "../../hooks/states/useAppContext.ts";
import Button from "../Button/Button.tsx";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import { MAX_ACTIVE_POKER_PADS } from "../../config/gameConfig.ts";
import { useChips } from "../../hooks/states/useChips.ts";

function PokerPads(): ReactNode {
	const { chips } = useChips();
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
			<div style={{ margin: "30px 0" }}>
				{pokerPads.length < MAX_ACTIVE_POKER_PADS && (
					<Button
						label={`Add Poker Pad (${formatedNextPokerPadPrice}€)`}
						disabled={nextPokerPadPrice > chips}
						onClick={buyPokerPad}
					/>
				)}
			</div>
		</PokerPadsWrapperStyles>
	);
}

export default PokerPads;
