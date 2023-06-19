import { Component, OnInit } from '@angular/core';
import { Donut } from '../../models';
import { DonutService } from '../../services/donut.service';
@Component({
  selector: 'app-donut-single',
  templateUrl: './donut-single.component.html',
  styleUrls: ['./donut-single.component.scss']
})
export class DonutSingleComponent implements OnInit {
  donut!: Donut;
  id = '3';
  emptyDonut: Donut = {
    name: '',
    description: '',
    icon: '',
    price: 0
  }

  constructor(private donutService: DonutService) { }

  ngOnInit() {
    this.donutService.getOneById('1').subscribe(donut => this.donut = donut || this.emptyDonut
    )
  }
  onCreate(donut: Donut): void {
    this.donutService.create(donut);
  }
  onUpdate(donut: Donut): void {
    this.donutService.update(donut)
  }

  onDelete(id: string): void {
    this.donutService.delete(id)
  }
}
