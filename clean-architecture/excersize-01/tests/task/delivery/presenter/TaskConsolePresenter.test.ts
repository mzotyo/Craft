import { Observer } from '../../../../src/common';
import {
	TasksConsolePresenter,
	TasksConsoleViewModel,
} from '../../../../src/task/delivery';
import { TasksResponseModel } from '../../../../src/task/usecase';

describe('TaskConsolePresenter', () => {
	test('', () => {
		const view = new ConsoleView();

		const presenter = new TasksConsolePresenter();
		presenter.subscribe(view);

		presenter.present(responseModel1);
	});
});

class ConsoleView implements Observer<TasksConsoleViewModel> {
	update(viewModel: TasksConsoleViewModel): void {
		viewModel.tasks.forEach((task) => {
			console.log(
				`${task.orderNumber}) reminder: '${task.reminder}', text: '${task.text}'`
			);
		});
	}
}

const responseModel1: TasksResponseModel = {
	tasks: [
		{ id: 25, text: 'text1', reminder: true },
		{ id: 14, text: 'text2', reminder: false },
	],
};
