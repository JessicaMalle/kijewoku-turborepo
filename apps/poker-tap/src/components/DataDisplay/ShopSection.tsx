import type {ReactNode} from "react";
import Cursors from "../Items/Cursors.tsx";
import Croupiers from "../Items/Croupiers.tsx";
import Button from "../Button/Button.tsx";
import {useAppContext} from "../../hooks/states/useAppContext.ts";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import {StyledShopSection} from "./StyledShopSection.styles.ts";
import {StyledItems} from "../Items/Item.styles.ts";

function ShopSection(): ReactNode {
		const { pokerPads, buyPokerPad, nextPokerPadPrice } = useAppContext()
		const formatedNextPokerPadPrice = useDigits({value: nextPokerPadPrice, digits: 0});

		return (
			<StyledShopSection>
				<h2>Shopoker</h2>
				<StyledItems>
					<Cursors />
					<Croupiers />
				</StyledItems>
				<h2>Poker Pads</h2>
				<p>We have {pokerPads.length} actually.</p>
				<Button label={`Add Poker Pad (${formatedNextPokerPadPrice}€)`} onClick={buyPokerPad} />
			</StyledShopSection>
		);
}

export default ShopSection;
