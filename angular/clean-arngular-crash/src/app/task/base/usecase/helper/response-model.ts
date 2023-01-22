import { Task } from '../../entity/task';

export type TaskResponseModel = {
  id: number;
  text: string;
  date: string;
  reminder: boolean;
};

export type TasksResponseModel = {
  tasks: TaskResponseModel[];
};

export function mapTasksToResponseModel(tasks: Task[]): TasksResponseModel {
  return {
    tasks: tasks.map((task) => ({
      id: task.id!,
      text: task.text,
      date: task.day,
      reminder: task.reminder,
    })),
  };
}
