import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-shared-modal',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shared-modal.component.html',
  styleUrl: './shared-modal.component.scss'
})
export class SharedModalComponent {
  @Input() content: any;
  @Input() isOpen: boolean = false;
  @Output() close = new EventEmitter<void>();
  

  closeModal() {
    this.isOpen = false;
    this.close.emit();
  }
}
