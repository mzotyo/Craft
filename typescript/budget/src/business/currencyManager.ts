import { Currency } from '../entities';
import { EntityManager } from './interfaces/entityManger';

export class CurrencyManager {
	entityManager: EntityManager;

	constructor(entityManager: EntityManager) {
		this.entityManager = entityManager;
	}

	addCurrency(currency: Currency) {
		this.entityManager.persist(currency);
	}
}
