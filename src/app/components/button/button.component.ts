import { NgIf, NgStyle } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  imports: [NgStyle, NgIf, FontAwesomeModule],
  templateUrl: './button.component.html',
  styleUrl: './button.component.css'
})
export class ButtonComponent {
  @Input() text: string = '';
  @Input() btnColor: string = '';
  @Input() showAddBtn: boolean = true;
  @Output() btnClick = new EventEmitter();
  @Output() toggle = new EventEmitter<boolean>();
  faTimes = faTimes;

  onClick() {
    this.btnClick.emit();
  }
}
