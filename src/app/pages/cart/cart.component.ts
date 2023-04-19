import { Component } from '@angular/core';
import { Cart, CartItem } from 'src/app/models/cart.model';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: 'cart.component.html', 
  styles: [
  ]
})
export class CartComponent {

  cart: Cart = { items: [
    {
      product: 'https://product-images.tcgplayer.com/fit-in/437x437/142030.jpg',
      name: 'Gishath, Suns Avatar',
      price: 26,
      quantity: 34,
      id: 1
    },
    {
      product: 'https://product-images.tcgplayer.com/fit-in/437x437/262891.jpg',
      name: 'Brago, King Eternal ',
      price: 4,
      quantity: 67,
      id: 2
    },
    {
      product: 'https://product-images.tcgplayer.com/fit-in/437x437/229379.jpg',
      name: 'Ranar the Ever-Watchful',
      price: 0.18,
      quantity: 119,
      id: 3
    },
    {
      product: 'https://product-images.tcgplayer.com/fit-in/437x437/8687.jpg',
      name: 'Black Lotus',
      price: 23000,
      quantity: 1,
      id: 4
    },
  ]};

  //to use in our table
  dataSource: Array<CartItem> = [];
  //columns to show in the table
  displayedColumns: Array<string> = [
    'product',
    'name',
    'price',
    'quantity',
    'total',
    'action'

  ];

  constructor(private cartService : CartService) {
    
    
  }

  ngOnInit(): void {
    this.dataSource = this.cart.items
    //subscribed the cart when a new item is added
    //The subscribe is going to receibe a cart back 
    //and we're going to add data on it
    this.cartService.cart.subscribe((_cart: Cart) => {
      this.cart = _cart;
      this.dataSource = this.cart.items;
    })
  }

  getTotal(items : Array<CartItem>) : number{
    return this.cartService.getTotal(items);
  }

  onClearCart(){
    this.cartService.clearCart();
  }

  onRemoveItem(item: CartItem) : void{
    this.cartService.removeFromCart(item);
  }

  onAddQuantity(item : CartItem) : void{
    this.cartService.addToCart(item);
  }

  onRemoveQuantity(item : CartItem) : void {
    this.cartService.removeQuantity(item)
  }

  checkOutClicked() : void {
    this.cartService.checkOutClicked();
  }

}
