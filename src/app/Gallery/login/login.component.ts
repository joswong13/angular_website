import { Component, OnInit } from '@angular/core';
import { FormControl,Validators } from '@angular/forms';
import {AuthServiceService} from '../authServices/auth-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email = new FormControl('',[Validators.email]);

  password = new FormControl('',[Validators.required]);

  constructor(private router: Router,private authService: AuthServiceService) { }

  ngOnInit() {
  }

  clearEmail(){
    this.email.reset();
  }
  clearPassword(){
    this.password.reset();
  }
  login(){
    console.log(this.email.value + " - " + this.password.value);
    this.authService.loginWithEmail(this.email.value,this.password.value)
      .then(res =>{
        console.log(res);
        this.router.navigate(['admin']);
      })
      .catch (err =>{
        console.log('Login error: ' + err);
      })
  }

}
