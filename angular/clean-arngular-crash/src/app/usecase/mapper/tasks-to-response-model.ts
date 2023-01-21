import { Task } from 'src/app/entity/task';
import { TasksResponseModel } from '../task-interactor-outputboundary';

export function mapTasksToResponseModel(tasks: Task[]): TasksResponseModel {
  return {
    tasks: tasks.map((task) => ({
      id: task.id!,
      text: task.text,
      date: task.date,
      reminder: task.reminder,
    })),
  };
}
