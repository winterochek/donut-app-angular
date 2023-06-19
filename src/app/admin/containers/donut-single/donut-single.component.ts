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
    this.donutService.getOneById('1M6pKl5').subscribe(donut => this.donut = donut || this.emptyDonut
    )
  }
  onCreate(donut: Donut): void {
    this.donutService
      .create(donut)
      .subscribe(() => console.log('created successfully'));
  }
  onUpdate(donut: Donut): void {
    this.donutService
      .update(donut)
      .subscribe({
        next: () => console.log('updated successfully'),
        error: (error) => console.log(error),
      })
  }

  onDelete(id: string): void {
    this.donutService
      .delete(id)
      .subscribe(() => console.log('deleted successfully'))
  }
}
