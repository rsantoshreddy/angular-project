import { Recipe } from './recipe.model';
import { EventEmitter, Injectable } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list-service';
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {
  recipeChanged = new Subject<Recipe[]>();
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

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
    this.recipeChanged.next([...this.recipes]);
  }

  updateRecipe(index: number, newrecipe: Recipe) {
    this.recipes[index] = newrecipe;
    this.recipeChanged.next([...this.recipes]);
  }
  deleteRecipe(id: number) {
    this.recipes.splice(id, 1);
    this.recipeChanged.next([...this.recipes]);
  }
}
