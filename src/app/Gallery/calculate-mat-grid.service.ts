import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateMatGridService {
  
  constructor() { }

  getInitWidth(windowWidth:number){
    //width
    var breakpoint:number;
    if (windowWidth <= 400){
      breakpoint = 1;
    }
    else if ( windowWidth >= 401 && windowWidth < 600){
      breakpoint = 2;
    }
    else if ( windowWidth >= 601 && windowWidth < 800){
      breakpoint = 3;
    }
    else if ( windowWidth >= 801 && windowWidth < 1000){
      breakpoint = 4;
    }
    else{
      breakpoint = 5;
    }
    return breakpoint;
    // else if ( window.innerWidth >= 801){
    //   this.breakpoint = 4;
    // }
    //this.breakpoint = (window.innerWidth <= 400) ? 1 : 6;
    //console.log(window.innerWidth);
    //console.log(this.breakpoint);
  }

  windowResize(event){
    var breakpoint:number;
    if (event.target.innerWidth <= 400){
      breakpoint = 1;
    }
    else if ( event.target.innerWidth >= 401 && event.target.innerWidth < 600){
      breakpoint = 2;
    }
    else if ( event.target.innerWidth >= 601 && event.target.innerWidth < 800){
      breakpoint = 3;
    }
    else if ( event.target.innerWidth >= 801 && event.target.innerWidth < 1000){
      breakpoint = 4;
    }
    else{
      breakpoint = 5;
    }
    return breakpoint;
    //console.log(event.target.innerWidth);
    //console.log(event.target);
    //this.breakpoint = (event.target.innerWidth <= 400) ? 1 : 6;    
    // console.log(this.breakpoint);
  }
}
