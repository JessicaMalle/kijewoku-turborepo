import { useState } from "react";
import { StyledSection } from "../Layouts/Section.styles.ts";
import ScrollZone from "../DataDisplay/ScrollZone.tsx";
import {
	ItemIllustration,
	ItemShopContainer,
	ItemShopDescription,
	ItemShopItemCount,
	ItemShopItemName,
	ItemSlotsContainer,
} from "./ItemShop.styles.ts";
import Icon from "../DataDisplay/Icon.tsx";
import Button from "../Button/Button.tsx";
import { useAppContext } from "../../hooks/states/useAppContext.ts";
import { ITEM_DESCRIPTIONS } from "../../config/gameConfig.ts";
import type { ReactNode } from "react";
import ItemSlot from "./ItemSlot.tsx";
import type { ItemType } from "../../types/gameTypes.ts";
import { INITIAL_ITEMS } from "../../services/ItemsService.ts";

function ItemShop(): ReactNode {
	const { items, buyItem, getItemPrice, canBuyItem } = useAppContext();
	const [activeItem, setActiveItem] = useState<ItemType>("CURSOR");

	const currentItem = items.find((item) => item.uid === activeItem);
	const itemPrice = getItemPrice(activeItem);
	const canBuy = canBuyItem(activeItem);

	const handleItemSelect = (item: ItemType): void => setActiveItem(item);

	// Formatage du nom de l'item (première lettre en majuscule, reste en minuscule)
	const formattedItemName =
		activeItem.charAt(0) + activeItem.slice(1).toLowerCase();

	return (
		<StyledSection>
			<ItemShopContainer>
				<ItemShopDescription>
					<div>
						<ItemShopItemName>{formattedItemName}</ItemShopItemName>
						<ItemShopItemCount>{currentItem?.count || 0}</ItemShopItemCount>
					</div>
					<ItemIllustration>
						<Icon size={100} />
					</ItemIllustration>
					<ScrollZone minHeight={60} maxHeight={60}>
						{ITEM_DESCRIPTIONS[activeItem]}
					</ScrollZone>
					<Button
						label={`Buy (${itemPrice} chips)`}
						onClick={() => buyItem(activeItem)}
						disabled={!canBuy}
					/>
				</ItemShopDescription>
				<ItemSlotsContainer>
					{INITIAL_ITEMS.map((item) => (
						<ItemSlot
							key={item.uid}
							uid={item.uid}
							onClick={() => handleItemSelect(item.uid)}
						/>
					))}
				</ItemSlotsContainer>
			</ItemShopContainer>
		</StyledSection>
	);
}

export default ItemShop;
