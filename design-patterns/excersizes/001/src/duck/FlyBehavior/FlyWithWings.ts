import { FlyBehavior } from './FlyBehavior';

// Flying behavior implementation for ducks that do fly
export class FlyWithWings implements FlyBehavior {
	fly(): void {
		console.log(`I'm flying!`);
	}
}
