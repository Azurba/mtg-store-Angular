import { Component } from '@angular/core';

//This is a object of type number and has id of type number
// This are the heights of the row when we're displaying 1, 3 or 4 cards per columns
const ROWS_HEIGHT: {[id:number]: number} = {1: 400, 3: 335, 4: 350};

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [ 
  ]
})
export class HomeComponent {

  columns = 3;
  rowHeight = ROWS_HEIGHT[this.columns];
  //category property is either of these two types
  category:string | undefined;

  onColumnsCountChange(colsNumber: number) : void{
    this.columns = colsNumber;
    this.rowHeight = ROWS_HEIGHT[this.columns];
  }

  onShowCategory(newCategory:string):void{
    this.category = newCategory
  }
}
