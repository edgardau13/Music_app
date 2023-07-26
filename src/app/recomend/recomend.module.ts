import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RecomendPageRoutingModule } from './recomend-routing.module';

import { RecomendPage } from './recomend.page';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

@NgModule({
  schemas:[CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RecomendPageRoutingModule
  ],
  declarations: [RecomendPage]
})
export class RecomendPageModule {}
