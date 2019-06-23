import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list-service';

@Injectable()
export class RecipeService {
  constructor(private shoppingListService: ShoppingListService) {}
  private recipes: Recipe[] = [
    new Recipe(0, 'test', 'description', 'https://images.media-allrecipes.com/images/55319.jpg?width=420&height=237', [
      new Ingredient('test', 3),
      new Ingredient('test', 3)
    ]),
    new Recipe(1, 'new ', 'description', 'https://images.media-allrecipes.com/images/55319.jpg?width=420&height=237', [
      new Ingredient('test', 3),
      new Ingredient('test', 3)
    ])
  ];

  recipeSelected = new EventEmitter<Recipe>();
  getRecipes() {
    return this.recipes.slice();
  }
  getRecipe(id: number) {
    return { ...this.recipes[id] };
  }
  addToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
