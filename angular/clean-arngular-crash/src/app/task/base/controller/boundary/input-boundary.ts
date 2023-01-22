import { AddTaskRequestViewModel } from '../helper/request-model';

export interface HeaderControllerInputBoundary {
  toggleTaskAddEnabled(): void;
}

export interface TasksControllerInputBoundary {
  getTasks(): void;
  deleteTask(id: number): void;
  toggleReminder(id: number): void;
  addTask(task: AddTaskRequestViewModel): void;
}
