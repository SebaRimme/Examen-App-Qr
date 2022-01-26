import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QrLectorPageRoutingModule } from './qr-lector-routing.module';

import { QrLectorPage } from './qr-lector.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    QrLectorPageRoutingModule
  ],
  declarations: [QrLectorPage]
})
export class QrLectorPageModule {}
