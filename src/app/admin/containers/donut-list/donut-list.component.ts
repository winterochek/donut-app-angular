import { Component } from '@angular/core';
import { Donut } from '../../models';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.scss']
})
export class DonutListComponent {
  donuts: Array<Donut> = [
    {
      id: '1',
      name: 'Just Chocolate',
      icon: 'just-chocolate',
      price: 119,
      promo: 'limited',
      description: 'Just a choco.'
    },
    {
      id: '2',
      name: 'Caramel Swirl',
      icon: 'caramel-swirl',
      price: 129,
      description: 'Chocolate drizzled with caramel.'
    },
    {
      id: '3',
      name: 'Sour Supreme',
      icon: 'sour-supreme',
      price: 119,
      promo: 'new',
      description: 'For the sour advocate.'
    },
    {
      id: '4',
      name: 'Vanilla Sundae',
      icon: 'vanilla-sundae',
      price: 119,
      description: 'Just a choco.'
    },
    {
      id: '5',
      name: 'Zesty Lemon',
      icon: 'zesty-lemon',
      price: 139,
      description: 'Delicios lucios lemon.'
    },

  ]

  trackById(idx: number, value: Donut): string {
    return value.id
  }
}
