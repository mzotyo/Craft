import { act, renderHook } from '@testing-library/react-hooks';
import { usePresenter } from '../../../../src/common';
import {
	TasksConsolePresenter,
	CONSOLE_VIEW_MODEL,
} from '../../../../src/task/delivery';
import { RESPONSE_MODEL } from '../../../../src/task/usecase';

describe('usePresenter()', () => {
	test('complete use case', () => {
		const presenter = new TasksConsolePresenter();
		const { result } = renderHook(() => usePresenter(presenter));

		let viewModel = result.current;
		expect(viewModel).toBeUndefined();

		act(() => presenter.present(RESPONSE_MODEL));

		viewModel = result.current;
		expect(viewModel).toEqual(CONSOLE_VIEW_MODEL);
	});
});
