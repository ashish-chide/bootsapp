import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './body/auth.service';


@Injectable()
export class AuthGuardService implements CanActivate  {


  constructor(public auth: AuthService, public router: Router) {}

canActivate() {
   if ( !this.auth.isAuthenticated()) {
       this.router.navigate(['login']);
       return false;
   }
  return true;
}

  }
