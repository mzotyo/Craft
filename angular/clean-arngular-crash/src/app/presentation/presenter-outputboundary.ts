export type HeaderViewModel = {
  title: string;
  addTaskButton: {
    style: string[];
    label: string;
  };
};

export interface HeaderPresenterOutputBoundary {
  updateView: (model: HeaderViewModel) => void;
}

export type TaskViewModel = {
  id: number;
  text: string;
  date: string;
  reminder: boolean;
};

export type TasksViewModel = {
  tasks: TaskViewModel[];
};

export interface TasksPresenterOutputBoundary {
  updateView: (model: TasksViewModel) => void;
}
