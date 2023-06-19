import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DonutListComponent, DonutSingleComponent } from './admin/containers';

const routes: Routes = [
  {
    path: 'admin', children: [
      { path: '', component: DonutListComponent },
      { path: 'donut', component: DonutSingleComponent }
    ]
  },
  { path: '', redirectTo: 'admin', pathMatch: 'full' },
  { path: '**', redirectTo: 'admin' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

