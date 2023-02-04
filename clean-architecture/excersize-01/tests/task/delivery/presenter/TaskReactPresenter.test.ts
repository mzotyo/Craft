import { Observer } from '../../../../src/common';
import {
	TasksReactPresenter,
	TasksConsoleViewModel,
	REACT_VIEW_MODEL,
} from '../../../../src/task/delivery';
import {} from '../../../../src/task/delivery/viewmodel/mocks/TasksConsoleViewModelMock';
import { RESPONSE_MODEL } from '../../../../src/task/usecase';

describe('TaskReactPresenter', () => {
	test('', () => {
		const view = new ReactView();

		const presenter = new TasksReactPresenter();
		presenter.subscribe(view);

		presenter.present(RESPONSE_MODEL);

		expect(view.getViewModel()).toEqual(REACT_VIEW_MODEL);
	});
});

class ReactView implements Observer<TasksConsoleViewModel> {
	private viewModel = undefined;

	update(viewModel: TasksConsoleViewModel): void {
		this.viewModel = viewModel;
	}

	getViewModel(): TasksConsoleViewModel {
		return this.viewModel;
	}
}
