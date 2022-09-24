import { Currency } from '../../entities';

export interface EntityManager {
	persist: (currency: Currency) => Currency;
}
