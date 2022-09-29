import { QuackBehavior } from './QuackBehavior';

// Quack behavior implementation for ducks that do quack
export class Quack implements QuackBehavior {
	quack(): void {
		console.log('Quack');
	}
}
