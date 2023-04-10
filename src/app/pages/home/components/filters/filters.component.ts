import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filters',
  templateUrl: 'filters.component.html', 
  styles: [
  ]
})
export class FiltersComponent {
  
  @Output() showCategory = new EventEmitter<string>();
  
  categories = ['Artifact', 'Creature', 'Enchantment', 'Instant','Land', 'Planeswalker','Sorcery' ];
  
  onShowCategory(category:string):void{
    this.showCategory.emit(category);
    console.log(this.categories);
  }

}
