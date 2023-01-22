import { TaskInteractorOutputBoundary } from '../usecase/boundary/output-boundary';
import { TasksResponseModel } from '../usecase/helper/response-model';
import {
  HeaderPresenterOutputBoundary,
  TasksPresenterOutputBoundary,
} from './boundary/output-boundary';
import {
  mapTaskEnabledToViewModel,
  mapTasksToViewModel,
} from './helper/view-model';

export class Presenter implements TaskInteractorOutputBoundary {
  private header!: HeaderPresenterOutputBoundary;
  private tasks!: TasksPresenterOutputBoundary;

  setOuputBoundaries(
    header: HeaderPresenterOutputBoundary,
    tasks: TasksPresenterOutputBoundary
  ) {
    this.header = header;
    this.tasks = tasks;
  }

  updateTaskAddEnabled(enabled: boolean): void {
    this.header.updateView(mapTaskEnabledToViewModel(enabled));
  }

  updateTasks(tasks: TasksResponseModel): void {
    this.tasks.updateView(mapTasksToViewModel(tasks));
  }
}
