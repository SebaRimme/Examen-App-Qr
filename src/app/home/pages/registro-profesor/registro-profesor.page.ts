import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro-profesor',
  templateUrl: './registro-profesor.page.html',
  styleUrls: ['./registro-profesor.page.scss'],
})
export class RegistroProfesorPage implements OnInit {

  formularioRegistroProfesor: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController){
    this.formularioRegistroProfesor = this.fb.group({
      nombre : new FormControl("",Validators.required),
      password : new FormControl("",Validators.required),
      confirmarPassword : new FormControl("",Validators.required)
    });
  }
  ngOnInit() {
  }

  async guardar(){
    var f = this.formularioRegistroProfesor.value;

    if(this.formularioRegistroProfesor.invalid){
      const alert = await this.alertController.create({
        header: 'Datos Incompletos',
        message: 'Complete los campos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }

    var usuario = {
      nombre: f.nombre ,
      password: f.password
    }

    localStorage.setItem('usuario',JSON.stringify(usuario));

  
    this.navCtrl.navigateRoot('/home/login-profesor');
  }
}
