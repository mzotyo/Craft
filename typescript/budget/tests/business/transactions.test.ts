import { renderHook, act } from '@testing-library/react-hooks';
import { useWallets } from '../../src/business';
import { Wallet } from '../../src/model';

const initalWallets = [
	{
		name: 'KP (RON)',
		amount: 1000,
		currency: 'RON',
	},
	{
		name: 'BT (RON)',
		amount: 15000,
		currency: 'RON',
	},
] as Wallet[];

test('Get a wallet', () => {
	const { result } = renderHook(() => useWallets(initalWallets));
	const { wallets } = result.current;

	expect(wallets.length).toEqual(2);
	expect(wallets[0]).toEqual({
		name: 'KP (RON)',
		amount: 1000,
		currency: 'RON',
	});
	expect(wallets[1]).toEqual({
		name: 'BT (RON)',
		amount: 15000,
		currency: 'RON',
	});
});

test('Income', () => {
	const { result } = renderHook(() => useWallets(initalWallets));
	const { income } = result.current;
	act(() => income('KP (RON)', 2000, 'RON'));

	const { wallets } = result.current;
	expect(wallets[0]).toEqual({
		name: 'KP (RON)',
		amount: 3000,
		currency: 'RON',
	});
	expect(wallets[1]).toEqual({
		name: 'BT (RON)',
		amount: 15000,
		currency: 'RON',
	});
});
