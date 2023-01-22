import { TasksResponseModel } from '../helper/response-model';

export interface TaskInteractorOutputBoundary {
  updateTaskAddEnabled(enabled: boolean): void;
  updateTasks(tasksModel: TasksResponseModel): void;
}
