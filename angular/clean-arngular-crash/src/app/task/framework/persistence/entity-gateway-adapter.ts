import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subscribeable } from 'src/app/common/base/observable/observable';
import { createSubscribeable } from 'src/app/common/framework/observable/observable-adapter-rxjs';
import { Task } from '../../base/entity/task';
import { EntityGateway } from '../../base/usecase/boundary/entity-gateway';

export class EntityGatewayAdapter implements EntityGateway {
  apiUrl: string = 'http://localhost:5000/tasks';

  constructor(private persistance: HttpClient) {}

  getTasks(): Subscribeable<Task[]> {
    return createSubscribeable(this.persistance.get<Task[]>(this.apiUrl));
  }
}
