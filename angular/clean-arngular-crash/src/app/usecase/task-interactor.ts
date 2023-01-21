import { nextAddTaskEnabledState } from './business/next-add-task-enabled-state';
import { TaskInteractorInputBoundary } from './task-interactor-inputboundary';
import { TaskInteractorOutputBoundary } from './task-interactor-outputboundary';

export class TaskInteractor implements TaskInteractorInputBoundary {
  // External references
  private output;

  // Internal states
  private addTaskEnabled: boolean = false;

  constructor(output: TaskInteractorOutputBoundary) {
    this.output = output;
  }

  toggleTaskAddEnabled() {
    console.debug('[TaskInteractor]: toggleTaskAddEnabled()');
    this.addTaskEnabled = nextAddTaskEnabledState(this.addTaskEnabled);
    this.output.updateTaskAddEnabled(this.addTaskEnabled);
  }
}
