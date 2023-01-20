import { Component } from '@angular/core';
import {
  HeaderVM,
  HeaderPresenterOutput,
} from 'src/app/presentation/header/header-presenter';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements HeaderPresenterOutput {
  viewModel: HeaderVM = {
    title: 'Initial title',
    addButton: {
      color: 'white',
      label: 'Add',
    },
  };

  updateView(viewModel: HeaderVM): void {
    console.debug('[HeaderComponent]: updateView(', viewModel, ')');
    this.viewModel = { ...viewModel };
  }

  onAddTask() {
    console.debug('[HeaderComponent]: onAddTask()');
  }
}
