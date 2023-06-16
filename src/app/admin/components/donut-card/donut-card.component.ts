import { Component, Input } from '@angular/core';
import { Donut } from '../../models';

@Component({
  selector: 'app-donut-card',
  templateUrl: './donut-card.component.html',
  styleUrls: ['./donut-card.component.scss']
})
export class DonutCardComponent {
  @Input() donut!:Donut
}
