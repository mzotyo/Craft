import { AddTaskViewModel } from '../../presentation/helper/view-model';
import {
  AddTaskResponseModel,
  TasksResponseModel,
} from '../helper/response-model';

export interface TaskInteractorOutputBoundary {
  updateTaskAddEnabled(enabled: boolean): void;
  updateTasks(tasksModel: TasksResponseModel): void;
  updateAddTaskView(addTaskResult: AddTaskResponseModel): void;
}
