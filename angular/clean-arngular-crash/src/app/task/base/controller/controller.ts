import { TaskInteractorInputBoundary } from '../usecase/boundary/input-boundary';
import {
  HeaderControllerInputBoundary,
  TasksControllerInputBoundary,
} from './boundary/input-boundary';
import {
  AddTaskRequestViewModel,
  mapAddTaskRequestViewModelToRequestModel,
} from './helper/request-model';

export class Controller
  implements HeaderControllerInputBoundary, TasksControllerInputBoundary
{
  private interactor: TaskInteractorInputBoundary;

  constructor(interactor: TaskInteractorInputBoundary) {
    this.interactor = interactor;
  }

  toggleTaskAddEnabled(): void {
    this.interactor.toggleTaskAddEnabled();
  }

  getTasks(): void {
    this.interactor.getTasks();
  }

  deleteTask(id: number): void {
    this.interactor.deleteTask(id);
  }

  toggleReminder(id: number): void {
    this.interactor.toggleReminderForTask(id);
  }

  addTask(task: AddTaskRequestViewModel): void {
    this.interactor.addTask(mapAddTaskRequestViewModelToRequestModel(task));
  }
}
