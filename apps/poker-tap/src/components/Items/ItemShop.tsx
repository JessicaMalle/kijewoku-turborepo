import type { ReactNode } from "react";
import { StyledSection } from "../Layouts/Section.styles.ts";
import ScrollZone from "../DataDisplay/ScrollZone.tsx";
import { ItemShopItemCount, ItemShopItemName } from "./ItemShop.styles.ts";
import Icon from "../DataDisplay/Icon.tsx";
import Button from "../Button/Button.tsx";

function ItemShop(): ReactNode {
	return (
		<StyledSection>
			<StyledSection>
				<div>
					<ItemShopItemName>Item name</ItemShopItemName>
					<ItemShopItemCount>0</ItemShopItemCount>
				</div>
				<Icon size={100} />
				<ScrollZone maxHeight={60}>
					Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
					eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
					ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
					tempor incididunt ut labore et dolore magna aliqua.
				</ScrollZone>
				<Button label="Buy" />
			</StyledSection>
			<ScrollZone maxHeight={60}>Lorem ipsum dolor sit amet</ScrollZone>
		</StyledSection>
	);
}

export default ItemShop;
