import { Component } from '@angular/core';
import { Product } from 'src/app/models/product.model';
import { CartService } from 'src/app/services/cart.service';

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

  constructor(private cartService : CartService) {
    
  }

  onColumnsCountChange(colsNumber: number) : void{
    this.columns = colsNumber;
    this.rowHeight = ROWS_HEIGHT[this.columns];
  }

  onShowCategory(newCategory:string):void{
    this.category = newCategory
  }

  //Call the addToCart method in the service
  //Here we will create a new CartItem with the information of the Product added that was sent from the product-box.component.html
  //With these information, we redirect it to the service
  onAddToCart(product : Product) : void{
    //We're "casting" the Product into a CartItem
    this.cartService.addToCart({
      product : product.image,
      name: product.name,
      price: product.price,
      quantity: 1,
      id: product.id
    })
  }
}
