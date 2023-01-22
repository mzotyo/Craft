import { AddTaskRequestModel } from '../helper/request-model';
import { AddTaskResponseModel } from '../helper/response-model';

export type AddTaskRequestValidationModel = {
  textValidationErrorMessages: string[];
  dateValidationErrorMessages: string[];
};

export function mapAddTaskRequestValidationModelToResponseModel(
  validation: AddTaskRequestValidationModel,
  task: AddTaskRequestModel
): AddTaskResponseModel {
  return {
    ...validation,
    ...task,
    status:
      !validation.textValidationErrorMessages.length &&
      !validation.textValidationErrorMessages.length,
  };
}
