import {
	OutputBoundary,
	ResponseModel,
} from '../../interactor/usecase/boundary/output';

type SuccessModel = {
	text: string;
};

type ErrorModel = {
	error: string;
};

export type ViewModel = SuccessModel | ErrorModel;

export interface Presenter {
	(updateView: (model: ViewModel) => void): OutputBoundary;
}

export const Presenter: Presenter = (
	updateView: (model: ViewModel) => void
): OutputBoundary => {
	return function (responseModel: ResponseModel): void {
		if (responseModel instanceof Error) {
			updateView({ error: responseModel.message });
		} else {
			updateView({ text: responseModel });
		}
	};
};
