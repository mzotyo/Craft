import { Task } from 'src/app/entity/task';
import { Observable } from 'src/app/framework/observable/observable';

export interface EntityGateway {
  getTasks(): Observable<Task[]>;
}
