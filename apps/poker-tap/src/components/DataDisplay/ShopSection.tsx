import { useState } from "react";
import { StyledShopSection } from "./StyledShopSection.styles";
import { ItemSelector, SelectorButton } from "./ShopSection.styles";
import ItemCard from "../Items/ItemCard";
import { useAppContext } from "../../hooks/states/useAppContext.ts";
import Button from "../Button/Button.tsx";
import { ITEM_DESCRIPTIONS } from "../../config/gameConfig.ts";
import type { ItemType } from "../../types/gameTypes.ts";

function ShopSection(): JSX.Element {
	const { items, buyItem, getItemPrice, canBuyItem } = useAppContext();

	const [activeItems, setActiveItems] = useState<ItemType>("CURSOR");

	const handleItemSelect = (item: ItemType): void => setActiveItems(item);

	const renderActiveItem = () => {
		const currentItem = items.find((item) => item.uid === activeItems);

		if (!currentItem) return null;

		const itemPrice = getItemPrice(activeItems);
		const canBuy = canBuyItem(activeItems);

		return (
			<ItemCard
				title={activeItems.charAt(0) + activeItems.slice(1).toLowerCase()}
				count={currentItem.count}
				description={ITEM_DESCRIPTIONS[activeItems]}
				actionComponent={
					<Button
						label={`Buy (${itemPrice} chips)`}
						onClick={() => buyItem(activeItems)}
						disabled={!canBuy}
					/>
				}
			/>
		);
	};

	return (
		<StyledShopSection>
			<h2>Poker Shop</h2>

			{renderActiveItem()}

			<ItemSelector>
				{(["CURSOR", "CROUPIER"] as ItemType[]).map((item) => (
					<SelectorButton
						key={item}
						$active={activeItems === item ? "true" : "false"}
						onClick={() => handleItemSelect(item)}
					>
						{item}
					</SelectorButton>
				))}
			</ItemSelector>
		</StyledShopSection>
	);
}

export default ShopSection;
