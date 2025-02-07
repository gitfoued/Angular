import { Component, OnInit } from '@angular/core';
import { Ingredient } from '../shared/ingredient.module';
@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit{
onIngredientAdded(ingredient: Ingredient) {
this.ingredients.push(ingredient);
}
ingredients :Ingredient[]=[
  new Ingredient("Apples",12),
  new Ingredient("Fraise",12),
];

constructor(){

}
  ngOnInit(): void {
    
  }
}
