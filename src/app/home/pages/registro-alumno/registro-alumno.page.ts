import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AlertController, NavController } from '@ionic/angular';

@Component({
  selector: 'app-registro-alumno',
  templateUrl: './registro-alumno.page.html',
  styleUrls: ['./registro-alumno.page.scss'],
})
export class RegistroAlumnoPage implements OnInit {

  formularioRegistroAlumno: FormGroup;

  constructor(public fb2: FormBuilder,
    public alertaController: AlertController,
    public navCrtl2: NavController){

    this.formularioRegistroAlumno = this.fb2.group({
      correo : new FormControl("",Validators.required),
      codigo : new FormControl("",Validators.required),
      confirmarCodigo : new FormControl("",Validators.required)
    });
  }
  ngOnInit() {
  }

  async guardado(){
    var f2 = this.formularioRegistroAlumno.value;

    if(this.formularioRegistroAlumno.invalid){
      const alert = await this.alertaController.create({
        header: 'Datos Incompletos',
        message: 'Rellene los datos',
        buttons: ['Aceptar']
      });
  
      await alert.present();
      return;
    }

    var sesion = {
      correo: f2.correo ,
      codigo: f2.codigo
    }

    localStorage.setItem('sesion',JSON.stringify(sesion));


    this.navCrtl2.navigateRoot('/home/login-alumno');
  }
}