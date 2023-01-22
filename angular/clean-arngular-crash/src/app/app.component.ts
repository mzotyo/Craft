import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { Controller } from './task/base/controller/controller';
import {
  HeaderPresenterOutputBoundary,
  TasksPresenterOutputBoundary,
} from './task/base/presentation/boundary/output-boundary';
import { Presenter } from './task/base/presentation/presenter';
import { TaskInteractor } from './task/base/usecase/task-interactor';
import { HeaderComponent } from './task/framework/components/header/header.component';
import { TasksComponent } from './task/framework/components/tasks/tasks.component';
import { EntityGatewayAdapter } from './task/framework/persistence/entity-gateway-adapter';

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
