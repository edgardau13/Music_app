import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalSongslocalPageRoutingModule } from './modal-songslocal-routing.module';

import { ModalSongslocalPage } from './modal-songslocal.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalSongslocalPageRoutingModule
  ],
  declarations: [ModalSongslocalPage]
})
export class ModalSongslocalPageModule {}
