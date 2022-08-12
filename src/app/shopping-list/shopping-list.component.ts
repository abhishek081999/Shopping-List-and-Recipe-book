import { Component, OnInit } from '@angular/core';
import { Ingerdient } from '../shared/ingedient.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {
  ingredients:Ingerdient[] = [
    new Ingerdient('Banana',5),
    new Ingerdient('Tomato',9),
    new Ingerdient('Apple',4)
  ];
  constructor() { }

  ngOnInit(): void {
  }
  onIngredientAdded(ingredient:Ingerdient){
  this.ingredients.push(ingredient);
  }
}
