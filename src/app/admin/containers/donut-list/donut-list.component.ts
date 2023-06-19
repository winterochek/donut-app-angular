import { DonutService } from './../../services/donut.service';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Donut } from '../../models';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-donut-list',
  templateUrl: './donut-list.component.html',
  styleUrls: ['./donut-list.component.scss']
})
export class DonutListComponent implements OnInit, OnDestroy {
  donuts: Donut[] = [];
  subscription: Subscription | undefined;

  constructor(private donutService: DonutService) { }

  ngOnInit(): void {
    this.subscription =
      this.donutService
        .getAll()
        .subscribe(data => this.donuts = data)
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe()
  }
  trackById(idx: number, value: Donut): string {
    return value?.id ?? value.name
  }
}
