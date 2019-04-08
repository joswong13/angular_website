import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mainpage',
  templateUrl: './mainpage.component.html',
  styleUrls: ['./mainpage.component.css']
})
export class MainpageComponent implements OnInit {
  isVisible:boolean = false;
  showButton:boolean = true;
  hideButton:boolean=false;
  initWindowSide:number;
  //breakpoint:number;
  constructor() { }

  ngOnInit() {
   //this.initWindowSide = window.innerWidth;

  }
  
  showResume(){
    this.isVisible = !this.isVisible;
    this.showButton = !this.showButton;
    this.hideButton = !this.hideButton;
  }

}
