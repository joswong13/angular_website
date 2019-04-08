import { Injectable } from '@angular/core';
import {AuthServiceService} from './auth-service.service';
import {Router, CanActivate} from '@angular/router';
//opposite of authguard service
@Injectable({
  providedIn: 'root'
})
export class LogGuardService implements CanActivate{

  constructor(private router: Router, private authService:AuthServiceService) { }

  canActivate(){
    if (this.authService.isLoggedIn()){
      this.router.navigate(['/']);
      return false;
    }
    else{
      
      return true;
    }
    // if (!(this.authService.isLoggedIn())){
    //   return true;
    // }
    // else{
    //   this.router.navigate(['/']);
    //   return false;
    // }
  }
}
