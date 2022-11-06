import { RequestBoundary, RequestModel } from './requestBoundary';
import { ResponseBoundary, ResponseModel } from './responseBoundary';
import { Strategy } from '../lib/strategy';

type Adapter<T> = { strategy: (algorithm: Strategy<T>) => RequestBoundary<T> };

export function usecase<T>(
	output: ResponseBoundary<ResponseModel<T>>
): Adapter<T> {
	function strategy(algorithm: Strategy<T>): RequestBoundary<T> {
		function process(model: RequestModel<T>) {
			algorithm(model, output);
		}
		return { process };
	}
	return { strategy };
}
