import { Quack } from './QuackBehavior';
import { FlyWithWings } from './FlyBehavior';
import { Duck } from './Duck';

export class MallardDuck extends Duck {
	constructor() {
		super(new FlyWithWings(), new Quack());
	}

	display() {
		console.log(`I'm a Millard Duckt`);
	}
}
