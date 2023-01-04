import { useState } from 'react';
import { Wallet } from '../model';

export function useWallets(initialWallets: Wallet[]) {
	const [wallets, setWallets] = useState(initialWallets);

	const income = (name: string, amount: number, currency: string) => {
		setWallets(
			wallets.map((wallet) => {
				if (wallet.name === name) {
					return {
						name: wallet.name,
						amount: wallet.amount + amount,
						currency: wallet.currency,
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
