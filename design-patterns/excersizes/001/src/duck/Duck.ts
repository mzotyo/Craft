import { FlyBehavior } from './FlyBehavior';
import { QuackBehavior } from './QuackBehavior';

export abstract class Duck {
	// Declare two reference variables for the behavior
	// interface types. All duck subclasses (in the same
	// package) inherit these.
	flyBehavior: FlyBehavior;
	quackBehavior: QuackBehavior;

	constructor(flyBehavior: FlyBehavior, quackBehavior: QuackBehavior) {
		this.flyBehavior = flyBehavior;
		this.quackBehavior = quackBehavior;
	}

	abstract display(): void;

	performFly(): void {
		// Delegate to the behavior class
		this.flyBehavior.fly();
	}

	performQuack(): void {
		// Delegate to the behavior class
		this.quackBehavior.quack();
	}

	swim(): void {
		console.log('All ducks float, even decoys!');
	}
}
