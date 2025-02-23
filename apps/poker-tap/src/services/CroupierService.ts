import { v5 as uuIdv5 } from 'uuid';
import type { Croupier } from '../types/gameTypes';
import { NAMESPACE } from './SaveService';

const createCroupier = (index: number): Croupier => ({
  uid: uuIdv5(`croupier-${index}`, NAMESPACE),
  bonus: 1,
});

const calculateCroupierCost = (count: number): number => {
  return 100 * (1.15 ** count);
};

const CroupierService = {
  createCroupier,
  calculateCroupierCost,
};

export default CroupierService;
