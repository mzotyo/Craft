import { EntityManager } from '../business/interfaces/entityManger';
import { Currency } from '../entities';

export class InMemoryDb implements EntityManager {
	currencies: Map<string, Currency> = new Map();

	persist(currency: Currency): Currency {
		this.currencies.set(currency, currency);
		return currency;
	}

	findById(id: string): Currency | undefined {
		return this.currencies.get(id);
	}
}
