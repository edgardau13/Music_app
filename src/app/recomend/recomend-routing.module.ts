import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RecomendPage } from './recomend.page';

const routes: Routes = [
  {
    path: '',
    component: RecomendPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RecomendPageRoutingModule {}
