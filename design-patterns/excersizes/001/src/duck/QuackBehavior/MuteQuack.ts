import { QuackBehavior } from './QuackBehavior';

// Quack behavior for ducks that do NOT quack
export class MuteQuack implements QuackBehavior {
	quack(): void {
		console.log(`<< Silence >>`);
	}
}
