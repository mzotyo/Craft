import { MallardDuck } from '../src/duck/MallardDuck';
import { ModelDuck } from '../src/duck/ModelDuck';
import { FlyRocketPowered } from '../src/duck/FlyBehavior';
import { Duck } from '../src/duck/Duck';

test('', () => {
	const mallard: Duck = new MallardDuck();
	mallard.display();
	mallard.performFly();
	mallard.performQuack();

	const model = new ModelDuck();
	model.display();
	model.performFly();
	model.setFlyBehavior(new FlyRocketPowered());
	model.performFly();
});
