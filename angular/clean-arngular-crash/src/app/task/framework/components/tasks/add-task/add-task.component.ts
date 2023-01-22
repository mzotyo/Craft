import { Component, Input, ViewChild } from '@angular/core';
import { TasksControllerInputBoundary } from 'src/app/task/base/controller/boundary/input-boundary';
import { AddTaskRequestViewModel } from 'src/app/task/base/controller/helper/request-model';
import { AddTaskPresenterOutputBoundary } from 'src/app/task/base/presentation/boundary/output-boundary';
import { AddTaskViewModel } from 'src/app/task/base/presentation/helper/view-model';

const initialViewModelState: AddTaskViewModel = {
  // Form
  visible: true,
  status: undefined,

  // text
  text: '',
  textStyle: '',
  textValidationMessages: [],
  textValidationError: false,

  // date
  date: '',
  dateStyle: '',
  dateValidationMessages: [],
  dateValidationError: false,

  // Reminder
  reminder: false,
};

const initialRequestState: AddTaskRequestViewModel = {
  text: '',
  date: '',
  reminder: false,
};

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent implements AddTaskPresenterOutputBoundary {
  @Input() controller!: TasksControllerInputBoundary;

  addTaskRequestViewModel: AddTaskRequestViewModel = initialRequestState;
  addTaskViewModel: AddTaskViewModel = initialViewModelState;

  addTask() {
    this.controller.addTask(this.addTaskRequestViewModel);
  }
  updateAddTaskView(addTaskViewModel: AddTaskViewModel) {
    this.addTaskViewModel = addTaskViewModel;
    this.addTaskRequestViewModel = {
      text: addTaskViewModel.text,
      date: addTaskViewModel.date,
      reminder: addTaskViewModel.reminder,
    };
  }
}
