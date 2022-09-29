import { QuackBehavior } from './QuackBehavior';

// Quack behavior implementation for rubber ducks that squeak
export class Squeak implements QuackBehavior {
	quack(): void {
		console.log(`Squeak`);
	}
}
