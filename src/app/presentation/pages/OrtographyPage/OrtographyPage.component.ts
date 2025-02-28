import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { ChatMessageComponent } from '../../components/ChatMessage/ChatMessage.component';

@Component({
  selector: 'app-ortography-page',
  imports: [CommonModule, ChatMessageComponent],
  templateUrl: './OrtographyPage.component.html',
  styleUrl: './OrtographyPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class OrtographyPageComponent {



}
