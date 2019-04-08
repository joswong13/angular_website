import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculate-display',
  templateUrl: './calculate-display.component.html',
  styleUrls: ['./calculate-display.component.css']
})
export class CalculateDisplayComponent implements OnInit {
  listOfItems = [];
  
  onItemAdded(itemData:{itemName1:string, itemPrice1:number,itemUnit:number}){
    console.log(itemData.itemName1 + "-"+ typeof itemData.itemPrice1 + "-" + itemData.itemUnit);
    var positionInArray = this.listOfItems.length;
    this.listOfItems.push({name:itemData.itemName1,price:itemData.itemPrice1,units:itemData.itemUnit,contentValue:'Not',position:positionInArray});
    //console.log(this.positionInArray);
    //this.listOfItems[0] = {name:'testItem',price:15.99,contentValue:'best'};
    this.calcBestValue();
  }
  calcBestValue(){
      var bestPricePerUnit:number;
      var bestPPUPosition= 0;
      for (var i = 0; i < this.listOfItems.length;i++){
        var currentPricePerUnit = this.listOfItems[i].price / this.listOfItems[i].units;
        //console.log();
        if (i==0){
          this.listOfItems[i].contentValue = 'Best';
          bestPricePerUnit = currentPricePerUnit;
        }
        else{
          if (bestPricePerUnit>currentPricePerUnit){
            this.listOfItems[i].contentValue = 'Best';
            this.listOfItems[bestPPUPosition].contentValue = 'Not';
            bestPPUPosition = i;
            bestPricePerUnit = currentPricePerUnit;
          }
        }
      }
      //console.log(this.listOfItems);
  }
  itemDelete(itemDeletePosition:{position:number}){
    console.log(itemDeletePosition.position);
    this.listOfItems.splice(itemDeletePosition.position, 1);
    //console.log(this.listOfItems);
    this.calcBestValue();
  }
  constructor() { }

  ngOnInit() {
  }

}
