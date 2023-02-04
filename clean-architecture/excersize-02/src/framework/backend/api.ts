import { First } from '../../entity/First';
import { Second } from '../../entity/Second';

export interface FetchService {
	fetchFirstString: () => Promise<string>;
	fetchSecondString: () => Promise<string>;
}

// ------------------------------------------------------------------------------
// > npm run dbjson
// ------------------------------------------------------------------------------
export const FetchService: FetchService = {
	fetchFirstString: async (): Promise<First> => {
		return fetch('http://localhost:5000/first')
			.then((response) => response.json())
			.then((data) => data.message);
	},
	fetchSecondString: async (): Promise<Second> => {
		return fetch('http://localhost:5000/second')
			.then((response) => response.json())
			.then((data) => data.message);
	},
};
