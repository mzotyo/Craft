import { Component, Input } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { TasksControllerInputBoundary } from 'src/app/task/base/controller/boundary/input-boundary';
import { TaskViewModel } from 'src/app/task/base/presentation/helper/view-model';

const initialState: TaskViewModel = {
  id: 0,
  text: '',
  date: '',
  reminderStyle: '',
};

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() taskViewModel: TaskViewModel = initialState;
  @Input() controller!: TasksControllerInputBoundary;

  closeIcon = faTimes;

  deleteTask() {
    this.controller.deleteTask(this.taskViewModel.id);
  }

  toggleReminder() {
    this.controller.toggleReminder(this.taskViewModel.id);
  }
}
