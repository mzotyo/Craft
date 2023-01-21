import { Component, Input } from '@angular/core';
import { HeaderControllerInputBoundary } from 'src/app/presentation/controller-inputboundary';
import {
  HeaderPresenterOutputBoundary,
  HeaderViewModel,
} from 'src/app/presentation/presenter-outputboundary';

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
    console.debug('[HeaderComponent]: updateView(', viewModel, ')');
    this.viewModel = { ...viewModel };
  }

  toggleAddTask() {
    console.debug('[HeaderComponent]: onAddTask()');
    this.controller.toggleTaskAddEnabled();
  }
}
