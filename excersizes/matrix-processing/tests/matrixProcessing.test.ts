import { usecase } from '../src/usecase';
import { controller } from '../src/controller';
import { createPresenter } from '../src/presenter';
import { leftToRightTopDown } from '../src/lib/strategy';
import { createModel } from '../src/viewmodel/viewmodel';

const viewModel = createModel<number>();
const presenter = createPresenter(viewModel);

beforeEach(() => {
	presenter.clear();
});

test('Use strategy left to right top down', () => {
	const responseBoundary = presenter.display;
	controller(usecase<number>(responseBoundary).strategy(leftToRightTopDown));

	expect(viewModel.output()).toEqual([
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16,
	]);
});
