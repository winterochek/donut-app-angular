import { Injectable } from '@angular/core';
import { Donut } from '../models';

@Injectable({
  providedIn: 'root'
})
export class DonutService {
  private donuts: Donut[] = [
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
  constructor() { }

  getAll(): Donut[] {
    return this.donuts
  }

  getOneById(id: string): Donut | null {
    const donut = this.donuts.find(item => item.id === id)
    return donut ?? null
  }

  create(donut: Donut): void {
    const id = this.donuts.length;
    donut.id = String(id);
    this.donuts.push(donut);
  }

  update(donut: Donut): void {
    this.donuts = this.donuts.map(item => item.id === donut.id ? donut : item);
  }

  delete(id: string): void {
    this.donuts = this.donuts.filter(item => item.id !== id);
  }
}
