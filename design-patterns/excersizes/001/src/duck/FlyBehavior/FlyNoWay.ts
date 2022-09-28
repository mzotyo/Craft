import { FlyBehavior } from './FlyBehavior';

// Flying behavior implementation for ducks that do NOT fly
// (like rubber ducks and decoy ducks).
export class FlyNoWay implements FlyBehavior {
	fly(): void {
		console.log(`I can't fly!`);
	}
}
