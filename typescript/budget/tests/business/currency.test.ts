import { CurrencyManager, EntityManager } from '../../src/business';
import { Currency } from '../../src/entities';
import { InMemoryDb } from '../../src/persistance';

describe('currency business logic', () => {
	test('check if currency exists', () => {
		const store = new InMemoryDb();
		const currencyManager = new CurrencyManager(store);
		currencyManager.addCurrency('RON');
		currencyManager.addCurrency('EUR');

		const usd = currencyManager.getCurrency('USD');
		expect(usd).toBeUndefined();

		const ron = currencyManager.getCurrency('RON');
		expect(ron).toEqual('RON');

		const eur = currencyManager.getCurrency('EUR');
		expect(eur).toEqual('EUR');
	});
});
