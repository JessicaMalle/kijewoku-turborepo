import type { ItemType } from "../types/gameTypes.ts";

export const GLOBAL_INTERVAL = 1000;
export const AUTOSAVE_INTERVAL = 10000;

export const ITEM_PRICE_MULTIPLIER = 1.15;
export const GLOBAL_PRICE_MULTIPLIER = 1.15;

export const POKER_PADS_BASE_PRICE = 400;
export const POKER_PADS_PRICE_MULTIPLIER = GLOBAL_PRICE_MULTIPLIER;

export const ITEM_CHIPS_PER_SECOND: Record<ItemType, number> = {
	CURSOR: 0.1,
	CROUPIER: 1,
};

export const ITEM_DESCRIPTIONS: Record<ItemType, string> = {
	CURSOR:
		"The cursor automatically clicks on the poker pad, generating 0.1 chips per second.",
	CROUPIER:
		"The croupier automatically deals cards, generating 1 chip per second.",
};

export const MAX_ACTIVE_POKER_PADS = 3;
