import {useState} from "react";
import Cursors from "../Items/Cursors.tsx";
import Croupiers from "../Items/Croupiers.tsx";
import Button from "../Button/Button.tsx";
import { useAppContext } from "../../hooks/states/useAppContext.ts";
import useDigits from "../../hooks/utils/useDigits.utils.ts";
import { StyledShopSection } from "./StyledShopSection.styles.ts";
import {ActiveItemDisplay, ItemSelector, SelectorButton} from "./ShopSection.styles.ts";

type ItemsUid = 'CURSOR' | 'CROUPIER';

const ItemComponents: Record<ItemsUid, JSX.Element> = {
	CURSOR: (
		<ActiveItemDisplay>
			<h3>Cursor</h3>
			<p>The cursor automatically clicks on the poker pad once per second.</p>
			<Cursors />
		</ActiveItemDisplay>
	),
	CROUPIER: (
		<ActiveItemDisplay>
			<h3>Croupier</h3>
			<p>The croupier automatically deals the cards, increasing your production.</p>
			<Croupiers />
		</ActiveItemDisplay>
	),
};

function ShopSection(): JSX.Element {
	const { pokerPads, buyPokerPad, nextPokerPadPrice } = useAppContext();
	const formattedNextPokerPadPrice: string | number = useDigits({
		value: nextPokerPadPrice,
		digits: 0,
	});
	const [activeItems, setActiveItems] = useState<ItemsUid>('CURSOR');

	const handleItemSelect = (item: ItemsUid): void => setActiveItems(item);

	return (
		<StyledShopSection>
			<h2>Poker Shop</h2>

			{ItemComponents[activeItems]}

			<ItemSelector>
				{(['CURSOR', 'CROUPIER'] as ItemsUid[]).map((item) => (
					<SelectorButton
						key={item}
						active={activeItems === item}
						onClick={() => handleItemSelect(item)}
					>
						{item}
					</SelectorButton>
				))}
			</ItemSelector>

			<h2>Poker Pads</h2>
			<p>We currently have {pokerPads.length} poker pad(s).</p>
			<Button
				label={`Add Poker Pad (${formattedNextPokerPadPrice}€)`}
				onClick={buyPokerPad}
			/>
		</StyledShopSection>
	);
}

export default ShopSection;
