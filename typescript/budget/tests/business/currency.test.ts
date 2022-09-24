import { CurrencyManager, EntityManager } from '../../src/business';
import { Currency } from '../../src/entities';

describe('currency business logic', () => {
	test('add new currency', () => {
		const entityManager: EntityManager = {
			persist: jest.fn(),
		};
		const currencyManager = new CurrencyManager(entityManager);
		const currency: Currency = 'RON';

		currencyManager.addCurrency(currency);
		expect(entityManager.persist).toBeCalledWith(currency);
	});
});
