import { Task } from '../entity/task';
import { EntityGateway } from '../usecase/task-interactor-entitygateway';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createObservable } from '../framework/observable/observable-adapter-rxjs';
import { Observable } from '../framework/observable/observable';

export class EntityGatewayAdapter implements EntityGateway {
  apiUrl: string = 'http://localhost:5000/tasks';

  constructor(private persistance: HttpClient) {}

  getTasks(): Observable<Task[]> {
    console.debug(`[EntityGatewayAdapter]: getTasks()`);
    return createObservable<Task[]>(this.persistance.get<Task[]>(this.apiUrl));
  }
}
