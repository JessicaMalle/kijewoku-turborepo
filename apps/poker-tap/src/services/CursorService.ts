import {
  CURSORS_BASE_PRICE,
  CURSORS_PRICE_MULTIPLIER
} from "../config/gameConfig.ts";

const CursorService = {
  calculateCursorCost: (currentCursors: number): number => {
    return CURSORS_BASE_PRICE * (CURSORS_PRICE_MULTIPLIER ** currentCursors);
  },
};

export default CursorService;
