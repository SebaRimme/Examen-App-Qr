import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrGenerarPageRoutingModule } from './qr-generar-routing.module';

import { QrGenerarPage } from './qr-generar.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QrGenerarPageRoutingModule
  ],
  declarations: [QrGenerarPage]
})
export class QrGenerarPageModule {}
