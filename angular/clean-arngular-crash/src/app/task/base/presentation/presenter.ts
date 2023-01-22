import { TaskInteractorOutputBoundary } from '../usecase/boundary/output-boundary';
import {
  AddTaskResponseModel,
  TasksResponseModel,
} from '../usecase/helper/response-model';
import {
  AddTaskPresenterOutputBoundary,
  HeaderPresenterOutputBoundary,
  TasksPresenterOutputBoundary,
} from './boundary/output-boundary';
import {
  AddTaskViewModel,
  mapAddTaskResponseModelToViewModel,
  mapTaskEnabledToViewModel,
  mapTasksToViewModel,
} from './helper/view-model';

export class Presenter implements TaskInteractorOutputBoundary {
  private header!: HeaderPresenterOutputBoundary;
  private tasks!: TasksPresenterOutputBoundary & AddTaskPresenterOutputBoundary;

  setOuputBoundaries(
    header: HeaderPresenterOutputBoundary,
    tasks: TasksPresenterOutputBoundary & AddTaskPresenterOutputBoundary
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

  updateAddTaskView(addTaskResult: AddTaskResponseModel): void {
    this.tasks.updateAddTaskView(
      mapAddTaskResponseModelToViewModel(addTaskResult)
    );
  }
}
