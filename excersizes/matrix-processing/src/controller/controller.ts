import { Matrix } from '../entity/matrix';
import { RequestBoundary } from '../usecase';

const matrix: Matrix<number> = [
	[1, 2, 3, 4],
	[5, 6, 7, 8],
	[9, 10, 11, 12],
	[13, 14, 15, 16],
];

export function controller(matrixProcessing: RequestBoundary<number>) {
	matrixProcessing.process(matrix);
}
