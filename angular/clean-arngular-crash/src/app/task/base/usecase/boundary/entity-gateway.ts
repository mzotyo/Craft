import { Task } from '../../entity/task';
import { Subscribeable } from '../../../../common/base/observable/observable';

export interface EntityGateway {
  getTasks(): Subscribeable<Task[]>;
  deleteTask(id: number): Subscribeable<void>;
  updateTask(task: Task): Subscribeable<Task>;
}
