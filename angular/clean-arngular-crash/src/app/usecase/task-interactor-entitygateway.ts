import { Task } from '../entity/task';
import { Observable } from '../framework/observable/observable';

export interface EntityGateway {
  getTasks(): Observable<Task[]>;
}
