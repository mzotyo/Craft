import { Task } from '../../entity/task';

export function replaceTask(tasks: Task[], task: Task): Task[] {
  return tasks.map((item) => {
    if (item.id === task.id) {
      return task;
    }
    return item;
  });
}

export function findTask(tasks: Task[], id: number): Task | undefined {
  return tasks.find((task) => task.id === id);
}
