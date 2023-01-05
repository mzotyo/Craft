export class Money {
	private amount: number;
	private currency: string;

	constructor(amount: number, currency: string) {
		this.amount = amount;
		this.currency = currency;
	}

	public getAmount(): number {
		return this.amount;
	}

	public getCurrency(): string {
		return this.currency;
	}
}
