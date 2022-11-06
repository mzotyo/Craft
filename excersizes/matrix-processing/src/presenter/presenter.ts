import { ResponseBoundary, ResponseModel } from '../usecase';
import { ViewModel } from '../viewmodel/viewmodel';

export function createPresenter<T>(viewModel: ViewModel<T>) {
	const display: ResponseBoundary<T> = (value: ResponseModel<T>) =>
		viewModel.print(value);

	const clear = () => viewModel.clear();

	return {
		display,
		clear,
	};
}
