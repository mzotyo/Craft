import { Component, Input } from '@angular/core';
import { HeaderControllerInputBoundary } from 'src/app/task/base/controller/boundary/input-boundary';
import { HeaderPresenterOutputBoundary } from 'src/app/task/base/presentation/boundary/output-boundary';
import { HeaderViewModel } from 'src/app/task/base/presentation/helper/view-model';

const initialState = {
  title: 'Task Tracker',
  addTaskButton: {
    style: ['btn btn-green'],
    label: 'Add',
  },
};

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements HeaderPresenterOutputBoundary {
  @Input() controller!: HeaderControllerInputBoundary;

  viewModel: HeaderViewModel = initialState;

  updateView(viewModel: HeaderViewModel): void {
    this.viewModel = { ...viewModel };
  }

  toggleAddTask() {
    this.controller.toggleTaskAddEnabled();
  }
}
