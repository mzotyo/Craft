import { TasksResponseModel } from 'src/app/usecase/task-interactor-outputboundary';
import { TasksViewModel } from '../presenter-outputboundary';

export function mapTasksToViewModel(model: TasksResponseModel): TasksViewModel {
  return {
    tasks: model.tasks.map((task) => ({
      id: task.id,
      text: task.text,
      date: task.date,
      reminder: task.reminder,
    })),
  };
}
