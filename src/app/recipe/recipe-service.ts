import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list-service';

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}
  private recipes: Recipe[] = [
    new Recipe('test', 'description', 'https://images.media-allrecipes.com/images/55319.jpg?width=420&height=237', [
      new Ingredient('test', 3),
      new Ingredient('test', 3)
    ]),
    new Recipe('new ', 'description', 'https://images.media-allrecipes.com/images/55319.jpg?width=420&height=237', [
      new Ingredient('test', 3),
      new Ingredient('test', 3)
    ])
  ];

  recipeSelected = new EventEmitter<Recipe>();

  getRecipe() {
    return this.recipes.slice();
  }
  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
