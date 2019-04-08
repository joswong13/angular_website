import { Injectable, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {AngularFireAuth} from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  private user: Observable<firebase.User>;
  private userDetails:firebase.User = null;

  constructor(private afAuth: AngularFireAuth,private router:Router ) {
    this.user = this.afAuth.authState;
    this.user.subscribe((user) =>{
      if (user){
        this.userDetails = user;
        console.log("From Auth service Constructor  - " + this.userDetails);
      }
      else{
        console.log("this is the null case from auth service");
        this.userDetails=null;
      }
    })
   }

   ngOnInIt(){
    


   }
   loginWithEmail(email:string,password:string){
     return this.afAuth.auth.signInWithEmailAndPassword(email,password);
   }

   isLoggedIn(){
     if (this.userDetails == null){
       return false;
     }
     else{
       return true;
     }
   }


  authUser(){
    return this.user;
  }
   logout(){
     this.afAuth.auth.signOut()
     .then(res =>{
       //console.log(res);
       this.router.navigate(['/']);
     })
   }
}
