import { Component, Input } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  //In the header, our cart will be initialize to have NO items/empty
  private _cart : Cart = { items: []};
  //this property will keep track of the mat-icon of the cart (which display the current quantity of product in the cart)
  itemsQuantity = 0;
  
  @Input()
  get Cart(): Cart{
    return this._cart
  }
  set Cart(cart : Cart){
    this._cart = cart;
    //getting all the products of the _cart array and "filtering" only the quantity of all these items and add them up
    this.itemsQuantity = cart.items.map((item) => item.quantity).reduce((prev, current) => prev + current,0);
  }

  constructor(private cartService : CartService) {
    
    
  }

  getTotal(items : Array<CartItem>) : number{
    return this.cartService.getTotal(items);
  }

  onClearCart(){
    this.cartService.clearCart();
  }
}
