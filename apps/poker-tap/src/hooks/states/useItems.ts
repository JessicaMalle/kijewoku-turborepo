import { useState, useEffect } from "react";
import { useAppContext } from "./useAppContext.ts";
import itemsService from "../../services/ItemsService.ts";

export const useItems = (itemUid: string) => {
	const { items, buyItem, getItemPrice, canBuyItem } = useAppContext();

	const currentItem = items.find((item) => item.uid === itemUid);

	const [itemCount, setItemCount] = useState(currentItem?.count || 0);
	const [itemBonus, setItemBonus] = useState(0);
	const [itemPrice, setItemPrice] = useState(0);

	useEffect(() => {
		if (currentItem) {
			setItemCount(currentItem.count);

			// Calcul du bonus spécifique à l'item
			const bonus = itemsService.getBonusForItem(itemUid, currentItem.count);
			setItemBonus(bonus);

			// Calcul dynamique du prix
			const price = getItemPrice(itemUid);
			setItemPrice(price);
		}
	}, [currentItem, itemUid, getItemPrice]);

	const handleBuyItem = () => {
		if (canBuyItem(itemUid)) {
			buyItem(itemUid);
		}
	};

	return {
		item: currentItem,
		itemCount,
		itemBonus,
		itemPrice,
		canBuy: canBuyItem(itemUid),
		buyItem: handleBuyItem,
	};
};
