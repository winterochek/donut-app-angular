import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { DonutListComponent, DonutSingleComponent } from './containers';
import { DonutCardComponent, DonutFormComponent } from './components';
import { AppRoutingModule } from '../app-routing.module';

@NgModule({
  declarations: [
    DonutListComponent,
    DonutCardComponent,
    DonutSingleComponent,
    DonutFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  exports: [
    DonutListComponent,
    DonutSingleComponent
  ]
})
export class AdminModule { }