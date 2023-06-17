import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models';

@Component({
  selector: 'app-donut-single',
  templateUrl: './donut-single.component.html',
  styleUrls: ['./donut-single.component.scss']
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut

  constructor() { }

  ngOnInit() {
    this.donut = {
      id: '3',
      name: 'Sour Supreme',
      icon: 'sour-supreme',
      price: 119,
      promo: 'new',
      description: 'For the sour advocate.'
    }
  }
  onCreate(donut: Donut) {
    console.log('New donut', donut);

  }
}
