import { AddTaskRequestModel } from '../helper/request-model';

export interface TaskInteractorInputBoundary {
  toggleTaskAddEnabled(): void;
  getTasks(): void;
  deleteTask(id: number): void;
  toggleReminderForTask(id: number): void;
  addTask(task: AddTaskRequestModel): void;
}
