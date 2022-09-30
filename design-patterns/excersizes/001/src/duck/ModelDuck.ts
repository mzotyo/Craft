import { Duck } from './Duck';
import { Quack } from './QuackBehavior';
import { FlyNoWay } from './FlyBehavior';

export class ModelDuck extends Duck {
	constructor() {
		super(new FlyNoWay(), new Quack());
	}

	display(): void {
		console.log(`I'm a model duck`);
	}
}
