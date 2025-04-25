import { useState } from "react";
import ScrollZone from "../DataDisplay/ScrollZone.tsx";
import {
	ItemIllustration,
	ItemInfoToggle,
	ItemNameAndInfoToggle,
	ItemPriceAndCount,
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
import BigChip from "../Chips/BigChip.tsx";
import { StyledSection } from "../Layouts/Section.styles.ts";

function ItemShop(): ReactNode {
	const { items, buyItem, getItemPrice, canBuyItem } = useAppContext();
	const [activeItem, setActiveItem] = useState<ItemType>("CURSOR");
	const [showDetail, setShowDetail] = useState<boolean>(false);

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
					<ItemNameAndInfoToggle>
						<ItemShopItemName>{formattedItemName}</ItemShopItemName>
						<ItemInfoToggle
							type="button"
							onClick={() => setShowDetail(!showDetail)}
						>
							i
						</ItemInfoToggle>
					</ItemNameAndInfoToggle>
					{showDetail ? (
						<ScrollZone fullHeight>{ITEM_DESCRIPTIONS[activeItem]}</ScrollZone>
					) : (
						<ItemIllustration>
							<Icon size={100} />
						</ItemIllustration>
					)}
					<ItemPriceAndCount>
						<Button
							label={
								<div
									style={{
										display: "flex",
										alignItems: "center",
										gap: 5,
									}}
								>
									<div
										style={{ border: "2px solid white", borderRadius: "100%" }}
									>
										<BigChip
											noInteraction
											size={24}
											label="O"
											style={{ cursor: "pointer" }}
										/>
									</div>

									{itemPrice}
								</div>
							}
							onClick={() => buyItem(activeItem)}
							disabled={!canBuy}
							fontSize={30}
							hasTextShadow
						/>
						<ItemShopItemCount>{currentItem?.count || 0}</ItemShopItemCount>
					</ItemPriceAndCount>
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
