import { FetchService } from '../../framework/backend/api';
import { InputBoundary, RequestModel } from './boundary/input';
import { OutputBoundary, ResponseModel } from './boundary/output';
import { mapToResponseModel } from './mappers/mapper';
import { MessageValidator } from './validators/validator';

export type Interactor = (
	fetchService: FetchService,
	validator: MessageValidator
) => (updateOutput: OutputBoundary) => InputBoundary;

export const Interactor: Interactor =
	(fetchService, validator) => (updateOutput) => {
		return (inputMessage: RequestModel) => {
			const error = validator(inputMessage);
			if (error) {
				return updateOutput(error);
			}
			Promise.all([
				fetchService.fetchFirstString(),
				fetchService.fetchSecondString(),
			]).then(([first, second]) => {
				const responseModel: ResponseModel = mapToResponseModel(
					first,
					second,
					inputMessage
				);
				return updateOutput(responseModel);
			});
		};
	};
