import { HttpClient, HttpHeaders } from '@angular/common/http';
import { createSubscribeable } from '../../framework/observable/observable-adapter-rxjs';
import { Task } from 'src/app/base/entity/task';
import { EntityGateway } from 'src/app/base/usecase/boundary/entity-gateway';
import { Subscribeable } from 'src/app/base/framework/observable/observable';

export class EntityGatewayAdapter implements EntityGateway {
  apiUrl: string = 'http://localhost:5000/tasks';

  constructor(private persistance: HttpClient) {}

  getTasks(): Subscribeable<Task[]> {
    return createSubscribeable(this.persistance.get<Task[]>(this.apiUrl));
  }
}
