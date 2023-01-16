import { Component, Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';
import { Task } from '../../Task';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css'],
})
export class AddTaskComponent {
  @Output() addTask: EventEmitter<Task> = new EventEmitter();

  text: string = '';
  day: string = '';
  reminder: boolean = false;

  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value));
  }

  onSubmit() {
    if (!this.text) {
      alert('Please add a task!');
      return;
    }

    if (!this.day) {
      alert('Please add a day and time!');
      return;
    }

    const task: Task = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.addTask.emit(task);

    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
