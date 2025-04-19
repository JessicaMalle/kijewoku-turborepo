import type { Item, ItemType } from "../types/gameTypes.ts";
import {
	ITEM_CHIPS_PER_SECOND,
	ITEM_PRICE_MULTIPLIER,
} from "../config/gameConfig.ts";

export const INITIAL_ITEMS: Item[] = [
	{
		uid: "CURSOR",
		originPrice: 15,
		count: 0,
	},
	{
		uid: "CROUPIER",
		originPrice: 100,
		count: 0,
	},
];

const getInitialItems = () => INITIAL_ITEMS;

const calculateItemCost = (originPrice: number, count: number): number => {
	return Math.floor(originPrice * ITEM_PRICE_MULTIPLIER ** count);
};

const getItemPrice = (items: Item[], itemUid: string): number => {
	const item = items.find((item) => item.uid === itemUid);
	if (!item) return 0;
	return calculateItemCost(item.originPrice, item.count);
};

const addItemByUid = (items: Item[], uid: string): Item[] => {
	return items.map((item) => {
		if (item.uid === uid) {
			return {
				...item,
				count: item.count + 1,
			};
		}
		return item;
	});
};

const canBuyItem = (chips: number, items: Item[], itemUid: string): boolean => {
	const price = getItemPrice(items, itemUid);
	return chips >= price;
};

const getBonusForItem = (itemUid: ItemType, count: number): number => {
	const bonusRate = ITEM_CHIPS_PER_SECOND[itemUid] || 0;
	return count * bonusRate;
};

const getTotalBonus = (items: Item[]): number => {
	return items.reduce((total, item) => {
		return total + getBonusForItem(item.uid, item.count);
	}, 0);
};

const itemsService = {
	getInitialItems,
	calculateItemCost,
	addItemByUid,
	canBuyItem,
	getItemPrice,
	getBonusForItem,
	getTotalBonus,
};

export default itemsService;
