import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-products-header',
  templateUrl: 'products-header.component.html',
  styles: [
  ]
})
export class ProductsHeaderComponent {
  // This property will be used to store the type of sort (ascending or descending)
  // Its default value is desc
  sort = 'desc';
  itemsShowCount = 12;
  //@Output is going to send the data outside the component, to a parent component (home.component)
  //The parent component is the one which the child tag is located inside = go to home.component.html
  //and see that inside that component there is <app-products-header>
  @Output() columnsCountChange = new EventEmitter<number>();

  // A function to updat the value of sort (Encapsulation)
  //It this a parameter of stype string and returns void
  onSortUpdated(newSort: string) : void {
    this.sort = newSort;
  }

  // update the number of items displayed
  onItemsUpdated(newCount: number) : void {
    this.itemsShowCount = newCount; 
  }
  
  // update the number of columns of items
  // It will take the new number and emit to the parent (since it is an @output event)
  onColumnsUpdated(newColNumber: number) : void {
    this.columnsCountChange.emit(newColNumber);
  }

}
