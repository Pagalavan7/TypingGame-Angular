import { Component, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-game',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './game.component.html',
  styleUrl: './game.component.css',
})
export class GameComponent {
  InputText = '';
  paragraphText: string = 'generaterandomtext';

  onInput(target: EventTarget) {
    this.InputText = (<HTMLInputElement>target).value;
  }
}
