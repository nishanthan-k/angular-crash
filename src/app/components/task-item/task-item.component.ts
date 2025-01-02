import { Component, Input } from '@angular/core';
import { Task } from '../../Task';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgStyle } from '@angular/common';

@Component({
  selector: 'app-task-item',
  imports: [FontAwesomeModule, NgStyle],
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css'
})
export class TaskItemComponent {
  @Input() task: Task =   {
    id: 999,
    text: 'Temp',
    day: 'May 5th at 2:30pm',
    reminder: true,
  };
  faTimes = faTimes;
}
