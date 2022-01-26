import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PopoverController } from '@ionic/angular';
import { BarcodeScanner } from '@awesome-cordova-plugins/barcode-scanner/ngx';

@Component({
  selector: 'app-qr-lector',
  templateUrl: './qr-lector.page.html',
  styleUrls: ['./qr-lector.page.scss'],
})
export class QrLectorPage {

  usuario = null;

  code = null;

  constructor(private barcodeScanner: BarcodeScanner, private activatedRoute: ActivatedRoute, private router: Router, public popoverController: PopoverController) {
    this.activatedRoute.queryParams.subscribe(params => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.usuario = this.router.getCurrentNavigation().extras.state.usuario;
      }
    })
  }

  async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverController,
      cssClass: 'select-popover',
      event: ev,
      translucent: true
    });
    await popover.present();
    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }

  scan() {
    this.barcodeScanner.scan().then(barcodeData => {
      this.code = barcodeData.text;
      console.log('Barcode data', this.code);
    }).catch(err => {
      console.log('Error', err)
    })
  }

}
