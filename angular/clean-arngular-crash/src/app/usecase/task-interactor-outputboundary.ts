export type TaskResponseModel = {
  id: number;
  text: string;
  date: string;
  reminder: boolean;
};

export type TasksResponseModel = {
  tasks: TaskResponseModel[];
};

export interface TaskInteractorOutputBoundary {
  updateTaskAddEnabled(enabled: boolean): void;

  updateTasks(tasksModel: TasksResponseModel): void;
}
