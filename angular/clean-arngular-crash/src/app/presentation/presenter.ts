import {
  TaskInteractorOutputBoundary,
  TasksResponseModel,
} from '../usecase/task-interactor-outputboundary';
import { mapTaskEnabledToViewModel } from './mapper/map-task-to-header';
import { mapTasksToViewModel } from './mapper/map-tasks-to-view-model';
import {
  HeaderPresenterOutputBoundary,
  TasksPresenterOutputBoundary,
} from './presenter-outputboundary';

export class Presenter implements TaskInteractorOutputBoundary {
  private header!: HeaderPresenterOutputBoundary;
  private tasks!: TasksPresenterOutputBoundary;

  setOuputBoundaries(
    header: HeaderPresenterOutputBoundary,
    tasks: TasksPresenterOutputBoundary
  ) {
    console.debug(`[Presenter]: setOutputBoundary(header, tasks)`);
    this.header = header;
    this.tasks = tasks;
  }

  updateTaskAddEnabled(enabled: boolean): void {
    console.debug(`[Presenter]: updateTaskAddEnabled(${enabled})`);
    this.header.updateView(mapTaskEnabledToViewModel(enabled));
  }

  updateTasks(tasks: TasksResponseModel): void {
    console.debug(`[Presenter]: updateTasks(${tasks})`);
    this.tasks.updateView(mapTasksToViewModel(tasks));
  }
}
