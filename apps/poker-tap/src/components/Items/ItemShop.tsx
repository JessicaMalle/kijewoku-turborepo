import { useState } from "react";
import { StyledSection } from "../Layouts/Section.styles.ts";
import ScrollZone from "../DataDisplay/ScrollZone.tsx";
import { ItemShopItemCount, ItemShopItemName } from "./ItemShop.styles.ts";
import Icon from "../DataDisplay/Icon.tsx";
import Button from "../Button/Button.tsx";
import { useAppContext } from "../../hooks/states/useAppContext.ts";
import { ITEM_DESCRIPTIONS } from "../../config/gameConfig.ts";
import type { ReactNode } from "react";

// Utiliser le type ItemType défini dans les types du jeu
type ItemsUid = "CURSOR" | "CROUPIER";

function ItemShop(): ReactNode {
	const { items, buyItem, getItemPrice, canBuyItem } = useAppContext();
	const [activeItem, setActiveItem] = useState<ItemsUid>("CURSOR");

	const currentItem = items.find((item) => item.uid === activeItem);
	const itemPrice = getItemPrice(activeItem);
	const canBuy = canBuyItem(activeItem);

	const handleItemSelect = (item: ItemsUid): void => setActiveItem(item);

	// Formatage du nom de l'item (première lettre en majuscule, reste en minuscule)
	const formattedItemName =
		activeItem.charAt(0) + activeItem.slice(1).toLowerCase();

	return (
		<StyledSection>
			<div>
				<StyledSection $lightStyle>
					<div>
						<div>
							<ItemShopItemName>{formattedItemName}</ItemShopItemName>
							<ItemShopItemCount>{currentItem?.count || 0}</ItemShopItemCount>
						</div>
						<Icon size={100} />
						<ScrollZone maxHeight={60}>
							{ITEM_DESCRIPTIONS[activeItem]}
						</ScrollZone>
						<Button
							label={`Buy (${itemPrice} chips)`}
							onClick={() => buyItem(activeItem)}
							disabled={!canBuy}
						/>
					</div>
				</StyledSection>
				<ScrollZone maxHeight={400}>
					{(["CURSOR", "CROUPIER"] as ItemsUid[]).map((item) => (
						<Button
							key={item}
							label={item.charAt(0) + item.slice(1).toLowerCase()}
							onClick={() => handleItemSelect(item)}
						/>
					))}
				</ScrollZone>
			</div>
		</StyledSection>
	);
}

export default ItemShop;
