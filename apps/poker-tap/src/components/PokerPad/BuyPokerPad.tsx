import type { ReactNode } from "react";
import { StyledPokerPadPlaceholder } from "./PokerPad.styles.ts";
import { useChips } from "../../hooks/states/useChips.ts";
import { useAppContext } from "../../hooks/states/useAppContext.ts";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import TextButton from "../Button/TextButton.tsx";

function BuyPokerPad(): ReactNode {
	const { chips } = useChips();
	const { buyPokerPad, nextPokerPadPrice } = useAppContext();
	const formatedNextPokerPadPrice = useDigits({
		value: nextPokerPadPrice,
		digits: 0,
	});

	return (
		<StyledPokerPadPlaceholder>
			<div style={{ margin: "30px 0" }}>
				<TextButton
					label={`> Add Poker Pad (${formatedNextPokerPadPrice}€) <`}
					disabled={nextPokerPadPrice > chips}
					onClick={buyPokerPad}
				/>
			</div>
		</StyledPokerPadPlaceholder>
	);
}

export default BuyPokerPad;
