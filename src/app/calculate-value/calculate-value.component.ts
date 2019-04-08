import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import {numberValidator} from './validator';
@Component({
  selector: 'app-calculate-value',
  templateUrl: './calculate-value.component.html',
  styleUrls: ['./calculate-value.component.css']
})
export class CalculateValueComponent implements OnInit {

  //priceFormControl = new FormControl('',[Validators.required,Validators.pattern('^[0-9]+(.)[0-9][0-9]')]);
  priceFormControl = new FormControl('',[numberValidator()]);

  //unitsFormControl = new FormControl('',[Validators.required,Validators.pattern('^[0-9]+(.)[0-9][0-9]')]);
  unitsFormControl = new FormControl('',[numberValidator()]);
  itemName = new FormControl();
  clearPrice(){
    //this.priceFormControl.setValue('');
    this.priceFormControl.reset();
  }
  clearName(){
    //this.itemName.setValue('');
    this.itemName.reset();
  }
  clearUnit(){
    //this.unitsFormControl.setValue('');
    this.unitsFormControl.reset();
    
  }
  

  @Output() itemCreated = new EventEmitter<{itemName1:string, itemPrice1:number,itemUnit:number}>();

  sendToArray(){
    //console.log(this.itemName.value + "- " + typeof parseFloat(this.priceFormControl.value));
    var tempNumPrice = parseFloat(this.priceFormControl.value);
    var tempNumUnit = parseFloat(this.unitsFormControl.value);
    console.log(this.unitsFormControl);
    this.itemCreated.emit({itemName1:this.itemName.value, itemPrice1:tempNumPrice,itemUnit:tempNumUnit});
    this.unitsFormControl.reset();
    this.itemName.reset();
    this.priceFormControl.reset();
  }
  
  
  
  
  constructor() { }

  ngOnInit() {
  }

}
