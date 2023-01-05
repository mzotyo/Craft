import { renderHook, act } from '@testing-library/react-hooks';
import { useWallets } from '../../src/business';
import { Wallet, Money } from '../../src/model';

const initalWallets = [
	{
		name: 'KP (RON)',
		money: new Money(1000, 'RON'),
	},
	{
		name: 'BT (RON)',
		money: new Money(15000, 'RON'),
	},
] as Wallet[];

test('Get a wallet', () => {
	const { result } = renderHook(() => useWallets(initalWallets));
	const { wallets } = result.current;

	expect(wallets.length).toEqual(2);
	expect(wallets[0]).toEqual({
		name: 'KP (RON)',
		money: new Money(1000, 'RON'),
	});
	expect(wallets[1]).toEqual({
		name: 'BT (RON)',
		money: new Money(15000, 'RON'),
	});
});

test('Income', () => {
	const { result } = renderHook(() => useWallets(initalWallets));
	const { income } = result.current;
	act(() => income('KP (RON)', 2000, 'RON'));

	const { wallets } = result.current;
	expect(wallets[0]).toEqual({
		name: 'KP (RON)',
		money: new Money(3000, 'RON'),
	});
	expect(wallets[1]).toEqual({
		name: 'BT (RON)',
		money: new Money(15000, 'RON'),
	});
});

test('Money', () => {
	const ron1000: Money = new Money(1000, 'RON');
	const ron15000: Money = new Money(15000, 'RON');

	const { result } = renderHook(() => useWallets(initalWallets));
	const { wallets } = result.current;

	expect(wallets.length).toEqual(2);
	expect(wallets[0]).toEqual({
		name: 'KP (RON)',
		money: new Money(1000, 'RON'),
	});
	expect(wallets[1]).toEqual({
		name: 'BT (RON)',
		money: new Money(15000, 'RON'),
	});
});

test('Wallet holds Money', () => {
	const ron1000 = new Money(1000, 'RON');
	const wallet: Wallet = {
		name: 'KP (RON)',
		money: ron1000,
	};
});
