import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css'],
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  onDeleteTask(task: Task) {
    if (!task.id) return;

    this.taskService.deleteTask(task.id).subscribe(() => {
      console.debug('Delete:', task.text);
      this.tasks = this.tasks.filter((listItem) => listItem.id !== task.id);
    });
  }

  onToggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateTask(task).subscribe(() => {
      console.debug('Reminder toggle for:', task.text);
    });
  }

  onAddTask(task: Task) {
    this.taskService.addTask(task).subscribe((persistedTask) => {
      console.debug('Add task: ', { persistedTask });
      this.tasks.push(persistedTask);
    });
  }
}
