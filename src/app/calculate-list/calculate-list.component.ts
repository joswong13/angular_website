import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculate-list',
  templateUrl: './calculate-list.component.html',
  styleUrls: ['./calculate-list.component.css']
})
export class CalculateListComponent implements OnInit {
  @Input() element:{name:string,price:number,units:number,contentValue:string,position:number};
  
  @Output() deleteButtonPressed = new EventEmitter<{position:number}>();

  deleteThisLine(){

    // var listOfItems = [{name:1},{name:2}];
    // console.log(listOfItems.length);
    this.deleteButtonPressed.emit({position:this.element.position});
    //console.log(this.element.position);
  }
  constructor() { }

  ngOnInit() {
  }

}
