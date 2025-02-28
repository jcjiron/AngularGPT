import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'app-chat-message',
  imports: [CommonModule],
  templateUrl: './ChatMessage.component.html',
  styleUrl: './ChatMessage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ChatMessageComponent {

  @Input({ required: true }) text!: string;
}
