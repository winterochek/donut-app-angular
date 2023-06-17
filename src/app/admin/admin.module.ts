import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DonutListComponent, DonutSingleComponent } from './containers';
import { DonutCardComponent, DonutFormComponent } from './components';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DonutListComponent,
    DonutCardComponent,
    DonutSingleComponent,
    DonutFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DonutListComponent,
    DonutSingleComponent
  ]
})
export class AdminModule { }
