import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoIngresadoAlumnoGuard implements CanActivate {
  constructor(public navCrtl2: NavController){
    
  }
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(localStorage.getItem('dentro')){
        this.navCrtl2.navigateRoot('/home/inicio-alumno');
        return false;
      }else{
        return true;
      }
    }
  
}
