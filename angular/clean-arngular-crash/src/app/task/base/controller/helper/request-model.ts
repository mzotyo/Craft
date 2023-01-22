import { AddTaskRequestModel } from '../../usecase/helper/request-model';

export type AddTaskRequestViewModel = {
  text: string;
  date: string;
  reminder: boolean;
};

export function mapAddTaskRequestViewModelToRequestModel(
  task: AddTaskRequestViewModel
): AddTaskRequestModel {
  return { ...task };
}
