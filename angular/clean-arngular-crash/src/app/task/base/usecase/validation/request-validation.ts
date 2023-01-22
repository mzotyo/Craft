import { AddTaskRequestModel } from '../helper/request-model';
import { AddTaskRequestValidationModel } from './request-validation-model';

export function validateAddTaskRequest(
  task: AddTaskRequestModel
): AddTaskRequestValidationModel {
  let validation: AddTaskRequestValidationModel = {
    textValidationErrorMessages: [],
    dateValidationErrorMessages: [],
  };

  if (!task.text) {
    validation = {
      ...validation,
      textValidationErrorMessages: ['Text is not allowed to be empty!'],
    };
  }

  if (!task.date) {
    validation = {
      ...validation,
      dateValidationErrorMessages: ['Text is not allowed to be empty!'],
    };
  }

  return validation;
}
