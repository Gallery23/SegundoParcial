import { Injectable } from '@angular/core';
import {
  CanActivateFn,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';

@Injectable()
export class GuardiaSeguridad {
  constructor(private rutas: Router) {}

  seguridad(): boolean {
    if (localStorage.getItem('token') == null) {
      return true;
    }
    return false;
  }
}
