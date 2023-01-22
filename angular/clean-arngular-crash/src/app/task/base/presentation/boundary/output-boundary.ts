import { HeaderViewModel, TasksViewModel } from '../helper/view-model';

export interface HeaderPresenterOutputBoundary {
  updateView: (model: HeaderViewModel) => void;
}

export interface TasksPresenterOutputBoundary {
  updateView: (model: TasksViewModel) => void;
}
