export type Strategy<T> = (matrix: T[][], callback: (value: T) => void) => void;

export function leftToRightTopDown<T>(
	matrix: T[][],
	callback: (value: T) => void
) {
	matrix.forEach((row) => {
		row.forEach((item) => callback(item));
	});
}
