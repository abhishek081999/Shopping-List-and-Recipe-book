
import { Subject } from 'rxjs';
import { Ingredient } from "../shared/ingredient.model";

export class shoppingListServise{
    ingredientsChanged = new Subject<Ingredient[]>();
    private ingredients:Ingredient[] = [
        new Ingredient('Banana',5),
        new Ingredient('Tomato',9),
        new Ingredient('Apple',4)
      ];

    getIngredients() {
        return this.ingredients.slice();
    } 
    addIngredient(ingredient: Ingredient) {
     this.ingredients.push(ingredient);
     this.ingredientsChanged.next(this.ingredients.slice());
    }
     addIngredients(ingredients: Ingredient[]){
// for(let ingredient of ingredients){
//     this.addIngredient(ingredient);
// }
this.ingredients.push(...ingredients);
this.ingredientsChanged.next(this.ingredients.slice());
    }
}