import { TaskInteractorInputBoundary } from '../usecase/task-interactor-inputboundary';
import {
  HeaderControllerInputBoundary,
  TasksControllerInputBoundary,
} from './controller-inputboundary';

export class Controller
  implements HeaderControllerInputBoundary, TasksControllerInputBoundary
{
  private interactor: TaskInteractorInputBoundary;

  constructor(interactor: TaskInteractorInputBoundary) {
    this.interactor = interactor;
  }

  toggleTaskAddEnabled(): void {
    console.debug('[Controller]: toggleTaskAddEnabled()');
    this.interactor.toggleTaskAddEnabled();
  }

  getTasks(): void {
    this.interactor.getTasks();
  }
}
