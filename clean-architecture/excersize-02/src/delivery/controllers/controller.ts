import { FetchService } from '../../framework/backend/api';
import { OutputBoundary } from '../../interactor/usecase/boundary/output';
import { Interactor } from '../../interactor/usecase/interactor';
import { MessageValidator } from '../../interactor/usecase/validators/validator';

export type Controller = (
	presenter: OutputBoundary
) => (inputMessage: string) => void;

export const Controller: Controller = (presenter) => (inputMessage) => {
	Interactor(FetchService, MessageValidator)(presenter)(inputMessage);
};
