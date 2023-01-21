import { HttpClient } from '@angular/common/http';
import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { EntityGatewayAdapter } from './persistence/entity-gateway-adapter';
import { Controller } from './presentation/controller';
import { Presenter } from './presentation/presenter';
import {
  HeaderPresenterOutputBoundary,
  TasksPresenterOutputBoundary,
} from './presentation/presenter-outputboundary';
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
