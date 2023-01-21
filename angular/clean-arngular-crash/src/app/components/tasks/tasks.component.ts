import { AfterViewInit, Component, Input } from '@angular/core';
import {
  TasksPresenterOutputBoundary,
  TasksViewModel,
} from 'src/app/presentation/presenter-outputboundary';

import { TasksControllerInputBoundary } from 'src/app/presentation/controller-inputboundary';
const initialState: TasksViewModel = {
  tasks: [
    { id: 1, text: 'Task1', date: '2022.10.15', reminder: false },
    { id: 2, text: 'Task2', date: '2023.03.22', reminder: true },
  ],
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
