import type {ReactNode} from "react";
import Cursors from "../Items/Cursors.tsx";
import Croupiers from "../Items/Croupiers.tsx";
import {StyledItems} from "../Items/Item.styles.ts";
import Button from "../Button/Button.tsx";
import {useAppContext} from "../../hooks/states/useAppContext.ts";
import useDigits from "../../hooks/utils/useDigits.utils.ts";

function ShopSection(): ReactNode {
	const { pokerPads, buyPokerPad, nextPokerPadPrice } = useAppContext()
	const formatedNextPokerPadPrice = useDigits({value: nextPokerPadPrice, digits: 0});

	return (
		<div>
			<h2>Items</h2>
			<StyledItems>
				<Cursors />
				<Croupiers />
			</StyledItems>
			<h2>Poker Pads</h2>
			<p>We have {pokerPads.length} actually.</p>
			<Button label={`Buy Poker Pad (${formatedNextPokerPadPrice}€)`} onClick={buyPokerPad} />
		</div>
	)
}

export default ShopSection;
