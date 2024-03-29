import { Task } from '../entity/task';
import { EntityGateway } from './boundary/entity-gateway';
import { TaskInteractorInputBoundary } from './boundary/input-boundary';
import { TaskInteractorOutputBoundary } from './boundary/output-boundary';
import {
  nextAddTaskEnabledState,
  toggleReminder,
} from './helper/business-logic';
import { findTask, replaceTask } from './helper/helper-logic';
import { AddTaskRequestModel } from './helper/request-model';
import { mapTasksToResponseModel } from './helper/response-model';
import { validateAddTaskRequest } from './validation/request-validation';
import { mapAddTaskRequestValidationModelToResponseModel } from './validation/request-validation-model';

export class TaskInteractor implements TaskInteractorInputBoundary {
  // External references
  private output: TaskInteractorOutputBoundary;
  private backend: EntityGateway;

  // Internal states
  private addTaskEnabled: boolean = false;
  private tasks: Task[] = [];

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
        this.tasks = tasks;
        this.output.updateTasks(mapTasksToResponseModel(tasks));
      },
      error: (message) => {
        console.debug(`Error:`, { message });
      },
    });
  }

  deleteTask(id: number): void {
    this.backend.deleteTask(id).subscribe({
      update: () => {
        this.tasks = this.tasks.filter((task) => task.id !== id);
        this.output.updateTasks(mapTasksToResponseModel(this.tasks));
      },
      error: (message: any) => {
        console.debug('Error:', { message });
      },
    });
  }

  toggleReminderForTask(id: number): void {
    const task = findTask(this.tasks, id);
    if (!task) {
      console.warn(`[TaskInteractor]: toggleReminderForTask(${id}) -
            Task was not found!`);
      return;
    }

    this.backend.updateTask(toggleReminder(task)).subscribe({
      update: (task) => {
        this.tasks = replaceTask(this.tasks, task);
        this.output.updateTasks(mapTasksToResponseModel(this.tasks));
      },
      error: (message) => {
        console.debug('Error:', { message });
      },
    });
  }

  addTask(task: AddTaskRequestModel): void {
    const response = mapAddTaskRequestValidationModelToResponseModel(
      validateAddTaskRequest(task),
      task
    );

    if (!response.status) {
      return this.output.updateAddTaskView(response);
    }
  }
}
