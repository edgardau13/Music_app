import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalSongslocalPage } from './modal-songslocal.page';

const routes: Routes = [
  {
    path: '',
    component: ModalSongslocalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalSongslocalPageRoutingModule {}
