import { Component, Input } from '@angular/core';
import { ClickStyleDirective } from '../directives/click-style.directive';

@Component({
  selector: 'app-square',
  imports: [ClickStyleDirective],
  templateUrl: './square.component.html',
  styleUrl: './square.component.scss'
})
export class SquareComponent {
  @Input() value: 'X' | 'O';

}
