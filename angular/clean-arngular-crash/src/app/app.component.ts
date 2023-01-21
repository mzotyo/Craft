import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Controller } from './controller/controller';
import { HeaderComponent } from './framework/components/header/header.component';
import { TasksComponent } from './framework/components/tasks/tasks.component';
import { EntityGatewayAdapter } from './framework/persistence/entity-gateway-adapter';
import {
  HeaderPresenterOutputBoundary,
  TasksPresenterOutputBoundary,
} from './presentation/boundary/output-boundary';
import { Presenter } from './presentation/presenter';
import { TaskInteractor } from './usecase/task-interactor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(HeaderComponent) headerComponent!: HeaderPresenterOutputBoundary;
  @ViewChild(TasksComponent) tasksComponent!: TasksPresenterOutputBoundary;

  constructor(private backend: HttpClient) {}

  private presenter = new Presenter();
  private entityGaeway = new EntityGatewayAdapter(this.backend);
  private taskInteractor = new TaskInteractor(
    this.presenter,
    this.entityGaeway
  );
  controller = new Controller(this.taskInteractor);

  ngAfterViewInit() {
    this.presenter.setOuputBoundaries(
      this.headerComponent,
      this.tasksComponent
    );
  }
}
