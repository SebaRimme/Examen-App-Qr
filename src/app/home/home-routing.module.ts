import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { IngresadoAlumnoGuard } from './pages/ingresado-alumno.guard';
import { IngresadoProfesorGuard } from './pages/ingresado-profesor.guard';
import { NoIngresadoAlumnoGuard } from './pages/no-ingresado-alumno.guard';
import { NoIngresadoProfesorGuard } from './pages/no-ingresado-profesor.guard';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  {
    path: 'login-profesor',
    loadChildren: () => import('./pages/login-profesor/login-profesor.module').then( m => m.LoginProfesorPageModule),
    canActivate: [NoIngresadoProfesorGuard]
  },
  {
    path: 'login-alumno',
    loadChildren: () => import('./pages/login-alumno/login-alumno.module').then( m => m.LoginAlumnoPageModule),
    canActivate: [NoIngresadoAlumnoGuard]
  },
  {
    path: 'registro-profesor',
    loadChildren: () => import('./pages/registro-profesor/registro-profesor.module').then( m => m.RegistroProfesorPageModule),
    canActivate: [NoIngresadoProfesorGuard]
  },
  {
    path: 'registro-alumno',
    loadChildren: () => import('./pages/registro-alumno/registro-alumno.module').then( m => m.RegistroAlumnoPageModule),
    canActivate: [NoIngresadoAlumnoGuard]
  },
  {
    path: 'inicio-profesor',
    loadChildren: () => import('./pages/inicio-profesor/inicio-profesor.module').then( m => m.InicioProfesorPageModule),
    canActivate: [IngresadoProfesorGuard]
  },
  {
    path: 'inicio-alumno',
    loadChildren: () => import('./pages/inicio-alumno/inicio-alumno.module').then( m => m.InicioAlumnoPageModule),
    canActivate: [IngresadoAlumnoGuard]
  },
  {
    path: 'qr-lector',
    loadChildren: () => import('./pages/qr-lector/qr-lector.module').then( m => m.QrLectorPageModule),
    canActivate: [IngresadoAlumnoGuard]
  },
  {
    path: 'qr-generar',
    loadChildren: () => import('./pages/qr-generar/qr-generar.module').then( m => m.QrGenerarPageModule),
    canActivate: [IngresadoProfesorGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
