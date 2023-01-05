import * as React from 'react';
import { render, screen } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react-hooks';
import { useWallets } from '../../src/business';
import { Wallet, Money } from '../../src/model';
import { WalletsTable } from '../../src/components';

const columns = [
	{ name: 'Name', selector: (wallet: Wallet) => wallet.name },
	{
		name: 'Amount',
		selector: (wallet: Wallet) => String(wallet.money.getAmount()),
	},
	{
		name: 'Currency',
		selector: (wallet: Wallet) => wallet.money.getCurrency(),
	},
];
const wallets: Wallet[] = [
	{ name: 'KP (RON)', money: new Money(1000, 'RON') },
	{ name: 'BT (Cont Curent)', money: new Money(15000, 'RON') },
];

test('Displays the wallets header', () => {
	render(<WalletsTable columns={columns} items={[]} />);

	screen.getByRole('columnheader', { name: 'Name' });
	screen.getByRole('columnheader', { name: 'Amount' });
	screen.getByRole('columnheader', { name: 'Currency' });
});

test('Displays the wallets from business logic', () => {
	const { result } = renderHook(() => useWallets(wallets));
	render(<WalletsTable columns={columns} items={result.current.wallets} />);

	screen.getByRole('row', { name: 'KP (RON) 1000 RON' });
	screen.getByRole('row', { name: 'BT (Cont Curent) 15000 RON' });
});

test('Displays the wallets with applied income', () => {
	const { result } = renderHook(() => useWallets(wallets));
	const { income } = result.current;
	act(() => income('KP (RON)', 2000, 'RON'));
	render(<WalletsTable columns={columns} items={result.current.wallets} />);

	screen.getByRole('row', { name: 'KP (RON) 3000 RON' });
	screen.getByRole('row', { name: 'BT (Cont Curent) 15000 RON' });
});
