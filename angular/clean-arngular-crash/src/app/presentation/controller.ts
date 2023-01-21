import { TaskInteractorInputBoundary } from '../usecase/task-interactor-inputboundary';
import { HeaderControllerInputBoundary } from './controller-inputboundary';

export class Controller implements HeaderControllerInputBoundary {
  private interactor: TaskInteractorInputBoundary;

  constructor(interactor: TaskInteractorInputBoundary) {
    this.interactor = interactor;
  }

  toggleTaskAddEnabled() {
    console.debug('[Controller]: toggleTaskAddEnabled()');
    this.interactor.toggleTaskAddEnabled();
  }
}
