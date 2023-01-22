import { AfterViewInit, Component, Input, ViewChild } from '@angular/core';
import { TasksControllerInputBoundary } from 'src/app/task/base/controller/boundary/input-boundary';
import {
  AddTaskPresenterOutputBoundary,
  TasksPresenterOutputBoundary,
} from 'src/app/task/base/presentation/boundary/output-boundary';
import {
  AddTaskViewModel,
  TasksViewModel,
} from 'src/app/task/base/presentation/helper/view-model';
import { AddTaskComponent } from './add-task/add-task.component';

const initialState: TasksViewModel = {
  tasks: [],
};

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent
  implements
    AfterViewInit,
    TasksPresenterOutputBoundary,
    AddTaskPresenterOutputBoundary
{
  @ViewChild(AddTaskComponent)
  addTasksComponent!: AddTaskPresenterOutputBoundary;

  @Input() controller!: TasksControllerInputBoundary;

  viewModel: TasksViewModel = initialState;

  ngAfterViewInit() {
    this.controller.getTasks();
  }

  updateView(model: TasksViewModel) {
    this.viewModel = { ...model };
  }

  updateAddTaskView(addTaskResult: AddTaskViewModel): void {
    this.addTasksComponent.updateAddTaskView(addTaskResult);
  }
}
