import { Component, ElementRef, EventEmitter, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.module';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent {

@ViewChild('nameInput')  nameInputRef!: ElementRef;
@ViewChild('amountInput')  amountInputRef!: ElementRef;
@Output()  IngredientAdded = new EventEmitter<Ingredient>
onAddItem() {
  const ingName=this.nameInputRef.nativeElement.value;
  const ingAmount=this.amountInputRef.nativeElement.value;
  const newIngredient= new Ingredient(ingName,ingAmount);
  this.IngredientAdded.emit(newIngredient);
  }
}
