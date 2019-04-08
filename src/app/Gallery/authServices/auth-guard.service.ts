import { Injectable } from '@angular/core';
import {AuthServiceService} from './auth-service.service';
import {Router, CanActivate} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate{

  constructor(private router: Router, private authService:AuthServiceService) { }

  canActivate(){
    if (this.authService.isLoggedIn()){
      console.log(this.authService.isLoggedIn());
      return true;
    }
    else{
      console.log(this.authService.isLoggedIn());
      this.router.navigate(['/login']);
      return false;
    }

  }
}
