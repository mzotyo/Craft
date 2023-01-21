import { Task } from '../entity/task';
import { nextAddTaskEnabledState } from './business/next-add-task-enabled-state';
import { mapTasksToResponseModel } from './mapper/tasks-to-response-model';
import { EntityGateway } from './task-interactor-entitygateway';
import { TaskInteractorInputBoundary } from './task-interactor-inputboundary';
import { TaskInteractorOutputBoundary } from './task-interactor-outputboundary';

export class TaskInteractor implements TaskInteractorInputBoundary {
  // External references
  private output: TaskInteractorOutputBoundary;
  private backend: EntityGateway;

  // Internal states
  private addTaskEnabled: boolean = false;

  constructor(output: TaskInteractorOutputBoundary, backend: EntityGateway) {
    this.output = output;
    this.backend = backend;
  }

  toggleTaskAddEnabled(): void {
    console.debug('[TaskInteractor]: toggleTaskAddEnabled()');
    this.addTaskEnabled = nextAddTaskEnabledState(this.addTaskEnabled);
    this.output.updateTaskAddEnabled(this.addTaskEnabled);
  }

  getTasks(): void {
    console.debug('[TaskInteractor]: getTasks()');
    this.backend.getTasks().subscribe((tasks: Task[]) => {
      this.output.updateTasks(mapTasksToResponseModel(tasks));
    });
  }
}
