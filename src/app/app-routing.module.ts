import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutListComponent, DonutSingleComponent } from './admin/containers';

const routes: Routes = [
  { path: '', component: DonutListComponent },
  { path: 'single', component: DonutSingleComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
