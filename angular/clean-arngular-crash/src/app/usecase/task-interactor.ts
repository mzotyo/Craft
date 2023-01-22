import { Task } from '../entity/task';
import { EntityGateway } from './boundary/entity-gateway';
import { TaskInteractorInputBoundary } from './boundary/input-boundary';
import { TaskInteractorOutputBoundary } from './boundary/output-boundary';
import { nextAddTaskEnabledState } from './helper/business-logic';
import { mapTasksToResponseModel } from './helper/response-model';

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
    this.addTaskEnabled = nextAddTaskEnabledState(this.addTaskEnabled);
    this.output.updateTaskAddEnabled(this.addTaskEnabled);
  }

  getTasks(): void {
    this.backend.getTasks().subscribe({
      update: (tasks) => {
        this.output.updateTasks(mapTasksToResponseModel(tasks));
      },
      error: (message) => {
        console.debug(`Error:`, { message });
      },
    });
  }
}
