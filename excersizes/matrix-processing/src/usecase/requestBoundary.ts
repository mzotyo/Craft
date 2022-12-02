import { Matrix } from '../../model/matrix';

export type RequestModel<T> = Matrix<T>;

export type RequestBoundary<T> = {
	process: (model: RequestModel<T>) => void;
};
