import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-login-alumno',
  templateUrl: './login-alumno.page.html',
  styleUrls: ['./login-alumno.page.scss'],
})
export class LoginAlumnoPage implements OnInit {

  formularioLoginAlumno: FormGroup;

  constructor(public fb2: FormBuilder,
    public alertaController: AlertController,
    public navCrtl2: NavController){

    this.formularioLoginAlumno = this.fb2.group({
      correo : new FormControl("",Validators.required),
      codigo : new FormControl("",Validators.required)
    });
  }

  ngOnInit() {
  }

  async continuar(){
    var f2 = this.formularioLoginAlumno.value;

    var sesion = JSON.parse(localStorage.getItem('sesion'));

    if(sesion.correo == f2.correo && sesion.codigo == f2.codigo){
      console.log('Dentro');
      localStorage.setItem('dentro','true')
      this.navCrtl2.navigateRoot('/home/inicio-alumno')
    }else{
      const alert = await this.alertaController.create({
        header: 'Datos Incorrectos',
        message: 'Rellene los datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
    }
  }
}
