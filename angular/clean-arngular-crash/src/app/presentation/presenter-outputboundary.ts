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
