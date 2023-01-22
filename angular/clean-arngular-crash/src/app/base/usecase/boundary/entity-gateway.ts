import { Task } from '../../entity/task';
import { Subscribeable } from '../../framework/observable/observable';

export interface EntityGateway {
  getTasks(): Subscribeable<Task[]>;
}
