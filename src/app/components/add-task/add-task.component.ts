import { NgClass, NgIf } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
import { UiService } from '../../services/ui.service';

@Component({
  selector: 'app-add-task',
  imports: [FormsModule, NgClass, NgIf],
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css'
})
export class AddTaskComponent {
  @Output() onAddTask = new EventEmitter();
  text: string = '';
  day: string = '';
  reminder: boolean = false;
  errorFields: { [key: string]: boolean } = {};
  showAddTask: boolean = false;
  subscription: Subscription;

  constructor(private uiService: UiService) {
    this.subscription = this.uiService
      .onToggle()
      .subscribe((value) => (this.showAddTask = value as boolean));
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  onChange(field: string, value: string): void {
    if (value !== '') {
      this.errorFields[field] = false;
    }
  }

  onSubmit() {
    let hasError = false;
    const fields = {
      text: this.text,
      day: this.day
    };

    Object.entries(fields).forEach(([fieldName, fieldValue]) => {
      if (fieldValue === '') {
        this.errorFields[fieldName] = true;
        hasError = true;
      }
    })

    if (hasError) {
      return;
    }

    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    this.onAddTask.emit(newTask);

    this.text = '';
    this.day = '';
    this.reminder = false;
    this.errorFields = {};
  }
}
