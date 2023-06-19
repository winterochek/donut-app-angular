import { DonutService } from './../../services/donut.service';
import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.scss']
})
export class DonutListComponent implements OnInit {
  donuts: Donut[] = [];

  constructor(private donutService: DonutService) { }

  ngOnInit(): void {
    this.donuts = this.donutService.getAll()
  }
  trackById(idx: number, value: Donut): string {
    return value?.id ?? value.name
  }
}
