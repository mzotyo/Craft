import { Task } from 'src/app/entity/task';
import { Subscribeable } from 'src/app/framework/observable/observable';

export interface EntityGateway {
  getTasks(): Subscribeable<Task[]>;
}
