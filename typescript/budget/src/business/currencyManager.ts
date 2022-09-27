import { Currency } from '../entities';
import { EntityManager } from './interfaces/entityManger';

export class CurrencyManager {
	entityManager: EntityManager;

	constructor(entityManager: EntityManager) {
		this.entityManager = entityManager;
	}

	addCurrency(currency: Currency): Currency {
		return this.entityManager.persist(currency);
	}

	getCurrency(currencyName: string): Currency | undefined {
		return this.entityManager.findById(currencyName);
	}
}
