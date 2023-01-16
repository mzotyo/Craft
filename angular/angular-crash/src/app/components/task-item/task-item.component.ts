import { Component, Input, Output, EventEmitter } from '@angular/core';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { Task } from '../../Task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css'],
})
export class TaskItemComponent {
  @Input() task!: Task;
  @Output() deleteTask: EventEmitter<Task> = new EventEmitter();
  @Output() toggleReminder: EventEmitter<Task> = new EventEmitter();

  faTimes = faTimes;

  onDelete() {
    this.deleteTask.emit(this.task);
  }

  onToggle() {
    this.toggleReminder.emit(this.task);
  }
}
