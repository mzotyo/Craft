export interface TaskInteractorInputBoundary {
  toggleTaskAddEnabled(): void;
  getTasks(): void;
  deleteTask(id: number): void;
  toggleReminderForTask(id: number): void;
}
