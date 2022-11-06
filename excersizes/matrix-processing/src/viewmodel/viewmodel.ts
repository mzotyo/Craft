export interface ViewModel<T> {
	print: (value: T) => void;
	clear: () => void;
	output: () => T[];
}

export function createModel<T>() {
	const { print, clear, output } = new (class implements ViewModel<T> {
		display: T[] = [];

		print(value: T) {
			this.display.push(value);
		}

		clear() {
			this.display = [];
		}

		output(): T[] {
			return [...this.display];
		}
	})();

	return {
		print,
		clear,
		output,
	};
}
