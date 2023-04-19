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
  @Input() product: Product | undefined;

  //We are emitting to the parent an event = we're sending the product to the parent
  //When the user click on the "shopping cart" button of the product card, this will be triggered
  //addToCart is and Output decorator, meaning it will send the data to parent (go to home.component.html)
  onAddToCart() : void {
    this.addToCart.emit(this.product);
  }

}
