import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FrontOfCardComponent } from './views/front-of-card/front-of-card.component';

const routes: Routes = [
  { path: '', component: FrontOfCardComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
