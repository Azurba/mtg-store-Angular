import { Injectable } from '@angular/core';
import { Cart, CartItem } from '../models/cart.model';
import { BehaviorSubject } from 'rxjs';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  // BehaviorSubject basically holds the initial value and automatically adds a new value to the array
  //It is a variant of Observable
  cart = new BehaviorSubject<Cart>({items: []})


  constructor(private _snackBar: MatSnackBar) { }

  addToCart(item: CartItem) : void {
    const items = [...this.cart.value.items];

    //check if a item is already in the cart, if it is, increase the quantity, if not, add it
    const itemInCart = items.find((_item) => _item.id === item.id);
    if(itemInCart){
      itemInCart.quantity += 1;
    }else{
      items.push(item);
    }

    //next gives a new value to the BehaviorSubject
    this.cart.next({ items });
    //When the item is added to the cart, create a snackbar that will display a msg, with button 'Ok', for 3 seconds
    this._snackBar.open('1 item added to cart.', 'Ok', {duration: 3000 })
    console.log(this.cart.value);
  }

  // The reducer walks through the array element-by-element, at each step adding the current array value to the result from the previous 
  // step (this result is the running sum of all the previous steps) — until there are no more elements to add.
  getTotal(items : Array<CartItem>) : number{
    return items.map((item) => item.price * item.quantity).reduce((prev, current) => prev + current, 0)
  }

  
  //next gives a new value to the BehaviorSubject
  clearCart() : void {
    this.cart.next({ items: []});
    this._snackBar.open("Cart is empty", "Ok", {duration: 3000})
  }

}
