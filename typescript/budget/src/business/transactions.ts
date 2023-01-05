import { useState } from 'react';
import { Wallet, Money } from '../model';

export function useWallets(initialWallets: Wallet[]) {
	const [wallets, setWallets] = useState(initialWallets);

	const income = (name: string, amount: number, currency: string) => {
		setWallets(
			wallets.map((wallet) => {
				if (wallet.name === name) {
					return {
						name: wallet.name,
						money: new Money(
							wallet.money.getAmount() + amount,
							wallet.money.getCurrency()
						),
					} as Wallet;
				}
				return wallet;
			})
		);
	};

	return {
		wallets,
		income,
	};
}
