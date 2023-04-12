import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product-box',
  templateUrl:'./product-box.component.html',
  styles: [
  ]
})
export class ProductBoxComponent {

  //Input receives data from parent
  @Input() fullWidthMode = false;

}
