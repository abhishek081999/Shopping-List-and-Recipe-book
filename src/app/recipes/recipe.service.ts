import { EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { shoppingListServise } from "../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";

@Injectable()
export class RecipeService{
    recipeSelected = new EventEmitter<Recipe>();
private recipes:Recipe[] = [
    new Recipe('Salad',
     'This is simply a test',
      'https://upload.wikimedia.org/wikipedia/commons/3/39/Recipe.jpg',
      [
        new Ingredient('potato',1),
        new Ingredient('spanich',2),
      ]),
    new Recipe('Burger',
     'This is simply a test',
      'https://media.istockphoto.com/photos/closeup-of-a-veggie-burger-with-copy-space-picture-id1331109186?b=1&k=20&m=1331109186&s=170667a&w=0&h=CWqc2DNV-frmE_aqiQu4Q-SfCUmqJIp362drb4cSMZU=',
      [
        new Ingredient('Buns',2),
        new Ingredient('potato',2),
      ])
];

constructor(private slService: shoppingListServise ){

}

getRecipes(){
   return this.recipes.slice(); 
}
getRecipe(index:number){
    return this.recipes[index];
 }

addIngredientsToShoppingList(ingredients: Ingredient[]){
this.slService.addIngredients(ingredients);
}
}