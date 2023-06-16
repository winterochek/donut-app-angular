import { Component } from '@angular/core';
import { Donut } from '../../models';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.scss']
})
export class DonutListComponent {
  donuts: Array<Donut> = [{
    id: '1',
    name: 'Chocolate',
    icon: 'just-chocolate',
    price: 119,
    description: 'Just a choco.'
  }]

}
