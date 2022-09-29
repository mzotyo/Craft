import { MallardDuck } from '../src/duck/MallardDuck';
import { Duck } from '../src/duck/Duck';

test('', () => {
	const mallard: Duck = new MallardDuck();
	mallard.display();
	mallard.performFly();
	mallard.performQuack();
});
