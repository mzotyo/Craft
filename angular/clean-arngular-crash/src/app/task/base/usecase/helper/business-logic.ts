import { Task } from '../../entity/task';

export function nextAddTaskEnabledState(oldState: boolean) {
  return !oldState;
}

export function toggleReminder(task: Task): Task {
  return { ...task, reminder: !task.reminder };
}
