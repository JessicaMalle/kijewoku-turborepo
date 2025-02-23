import { v5 as uuIdv5 } from 'uuid';
import {CROUPIERS_BASE_PRICE, CROUPIERS_PRICE_MULTIPLIER} from "../config/gameConfig.ts";
import type { Croupier } from '../types/gameTypes';
import { NAMESPACE } from './SaveService';

const createCroupier = (index: number): Croupier => ({
  uid: uuIdv5(`croupier-${index}`, NAMESPACE),
  bonus: 1,
});

const calculateCroupierCost = (count: number): number => {
  return CROUPIERS_BASE_PRICE * (CROUPIERS_PRICE_MULTIPLIER ** count);
};

const CroupierService = {
  createCroupier,
  calculateCroupierCost,
};

export default CroupierService;
