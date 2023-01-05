import React from 'react';
import { WalletsTable } from './components';
import { Wallet, Money } from './model';

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
const wallets = [
	{ name: 'KP (RON)', money: new Money(1000, 'RON') },
	{ name: 'BT (Cont Curent)', money: new Money(15000, 'RON') },
];

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<WalletsTable columns={columns} items={wallets} />
			</header>
		</div>
	);
}

export default App;
