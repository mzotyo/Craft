import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { HeaderComponent } from './components/header/header.component';
import { Controller } from './presentation/controller';
import { Presenter } from './presentation/presenter';
import { HeaderPresenterOutputBoundary } from './presentation/presenter-outputboundary';
import { TaskInteractor } from './usecase/task-interactor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild(HeaderComponent) headerComponent!: HeaderPresenterOutputBoundary;

  private presenter = new Presenter(this.headerComponent);
  private taskInteractor = new TaskInteractor(this.presenter);

  // Is injected into child component
  controller = new Controller(this.taskInteractor);

  ngAfterViewInit() {
    this.presenter.setOuputBoundary(this.headerComponent);
  }
}
