import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-login-profesor',
  templateUrl: './login-profesor.page.html',
  styleUrls: ['./login-profesor.page.scss'],
})
export class LoginProfesorPage implements OnInit {

  formularioLoginProfesor: FormGroup;

  constructor(public fb: FormBuilder,
    public alertController: AlertController,
    public navCtrl: NavController){
    this.formularioLoginProfesor = this.fb.group({
      nombre : new FormControl("",Validators.required),
      password : new FormControl("",Validators.required)
    })
     
  }
  ngOnInit() {
  }

  async siguiente(){
    var f = this.formularioLoginProfesor.value;

    var usuario = JSON.parse(localStorage.getItem('usuario'));

    if(usuario.nombre == f.nombre && usuario.password == f.password){
      console.log('Ingresado');
      localStorage.setItem('ingresado','true')
      this.navCtrl.navigateRoot('/home/inicio-profesor')
    }else{
      const alert = await this.alertController.create({
        header: 'Datos Incorrectos',
        message: 'Complete los campos correctamente',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  }
}
