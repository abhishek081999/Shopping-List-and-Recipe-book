import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { shoppingListServise } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
 @ViewChild('nameInput') nameInputRef:ElementRef;
 @ViewChild('amountInput') amountInputRef:ElementRef;
 
  constructor(private slService:shoppingListServise ) { }

  ngOnInit(): void {
  }
  onAddItem(){
    const ingName =this.nameInputRef.nativeElement.value;
    const ingAmount = this.amountInputRef.nativeElement.value;
const newIngerdient = new Ingredient(ingName,ingAmount);
this.slService.addIngredient(newIngerdient)
  }

}
