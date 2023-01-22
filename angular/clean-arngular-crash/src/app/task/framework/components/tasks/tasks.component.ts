import { AfterViewInit, Component, Input } from '@angular/core';
import { TasksControllerInputBoundary } from 'src/app/task/base/controller/boundary/input-boundary';
import { TasksPresenterOutputBoundary } from 'src/app/task/base/presentation/boundary/output-boundary';
import { TasksViewModel } from 'src/app/task/base/presentation/helper/view-model';

const initialState: TasksViewModel = {
  tasks: [],
};

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent
  implements AfterViewInit, TasksPresenterOutputBoundary
{
  @Input() controller!: TasksControllerInputBoundary;

  viewModel: TasksViewModel = initialState;

  ngAfterViewInit() {
    this.controller.getTasks();
  }

  updateView(model: TasksViewModel) {
    this.viewModel = { ...model };
  }
}
