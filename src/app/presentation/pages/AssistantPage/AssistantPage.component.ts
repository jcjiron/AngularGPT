import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-assistant-page',
  imports: [CommonModule],
  templateUrl: './AssistantPage.component.html',
  styleUrl: './AssistantPage.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class AssistantPageComponent { }
