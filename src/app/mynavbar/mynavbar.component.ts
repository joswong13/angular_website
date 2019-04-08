import { Component, OnInit } from '@angular/core';
import {AuthServiceService} from '../Gallery/authServices/auth-service.service';
import {Router} from '@angular/router';
import { Observable } from 'rxjs';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-mynavbar',
  templateUrl: './mynavbar.component.html',
  styleUrls: ['./mynavbar.component.css']
})
export class MynavbarComponent implements OnInit {
  //private isLoggedIn: boolean = false;
  user: Observable<firebase.User>;
  currentWidth:number;
  navBarDropDown:boolean;
  constructor(private authService:AuthServiceService, private router:Router) {

  }
  
  ngOnInit() {
    this.user = this.authService.authUser();
    this.currentWidth = window.innerWidth;
    if (this.currentWidth > 500){
      this.navBarDropDown = false;
    }
    else{
      this.navBarDropDown = true;
    }

  }

  onResize(event){
    this.currentWidth = event.target.innerWidth;
    if (this.currentWidth > 500){
      this.navBarDropDown = false;
    }
    else{
      this.navBarDropDown = true;
    }
    //console.log(this.currentWidth);
  }

  logout(){
    this.authService.logout();
  }
}
