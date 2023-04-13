import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from 'src/app/models/product.model';

@Component({
  selector: 'app-product-box',
  templateUrl:'./product-box.component.html',
  styles: [
  ]
})
export class ProductBoxComponent {

  //Input receives data from parent
  @Input() fullWidthMode = false;
  @Output() addToCart = new EventEmitter();

  product: Product | undefined = {
    id: 1,
    name: 'Forest',
    price: 0.80,
    type: 'Land',
    description: 'Description',
    image: 'https://tools.toywiz.com/_images/_webp/_products/lg/mtgdominariaunited281forestfoil.webp'
  };

  //We are emitting to the parent an event = we're sending the product to the parent
  //When the user click on the "shopping cart" button of the product card, this will be triggered
  //addToCart is and Output decorator, meaning it will send the data to parent (go to home.component.html)
  onAddToCart() : void {
    this.addToCart.emit(this.product);
  }

}
