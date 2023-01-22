import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Task } from '../../entity/task';
import { createSubscribeable } from '../../framework/observable/observable-adapter-rxjs';
import { Subscribeable } from '../../framework/observable/observable';
import { EntityGateway } from 'src/app/usecase/boundary/entity-gateway';

export class EntityGatewayAdapter implements EntityGateway {
  apiUrl: string = 'http://localhost:5000/tasks';

  constructor(private persistance: HttpClient) {}

  getTasks(): Subscribeable<Task[]> {
    return createSubscribeable(this.persistance.get<Task[]>(this.apiUrl));
  }
}
