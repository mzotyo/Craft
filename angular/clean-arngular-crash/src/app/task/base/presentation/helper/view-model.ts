import {
  AddTaskResponseModel,
  TasksResponseModel,
} from '../../usecase/helper/response-model';

export type HeaderViewModel = {
  title: string;
  addTaskButton: {
    style: string[];
    label: string;
  };
};

export function mapTaskEnabledToViewModel(enabled: boolean): HeaderViewModel {
  return {
    title: 'Task Tracker',
    addTaskButton: {
      style: enabled ? ['btn', 'btn-red'] : ['btn', 'btn-green'],
      label: enabled ? 'Cacel' : 'Add',
    },
  };
}

export type TaskViewModel = {
  id: number;
  text: string;
  date: string;
  reminderStyle: string;
};

export type TasksViewModel = {
  tasks: TaskViewModel[];
};

export function mapTasksToViewModel(model: TasksResponseModel): TasksViewModel {
  return {
    tasks: model.tasks.map((task) => ({
      id: task.id,
      text: task.text,
      date: task.date,
      reminderStyle: task.reminder ? 'reminder' : '',
    })),
  };
}

export type AddTaskViewModel = {
  // Form
  visible: boolean;
  status?: boolean;

  // text
  text: string;
  textStyle: string;
  textValidationMessages: string[];
  textValidationError: boolean;

  // date
  date: string;
  dateStyle: string;
  dateValidationMessages: string[];
  dateValidationError: boolean;

  // Reminder
  reminder: boolean;
};

export function mapAddTaskResponseModelToViewModel(
  response: AddTaskResponseModel
): AddTaskViewModel {
  return {
    visible: true,
    status: response.status,
    text: response.text,
    textStyle: response.textValidationErrorMessages.length ? 'text-error' : '',
    textValidationMessages: response.textValidationErrorMessages,
    textValidationError: !!response.textValidationErrorMessages.length,
    date: response.date,
    dateStyle: response.dateValidationErrorMessages.length ? 'date-error' : '',
    dateValidationMessages: response.dateValidationErrorMessages,
    dateValidationError: !!response.dateValidationErrorMessages.length,
    reminder: response.reminder,
  };
}
