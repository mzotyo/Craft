import { Subscribeable } from '../../../../common/base/observable/observable';
import { Task } from '../../entity/task';

export interface EntityGateway {
  getTasks(): Subscribeable<Task[]>;
}
