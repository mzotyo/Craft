export interface TaskInteractorInputBoundary {
  toggleTaskAddEnabled(): void;
  getTasks(): void;
  deleteTask(id: number): void;
}
