import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe-service';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.less']
})
export class RecipeListComponent implements OnInit {
  @Output() onRecipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe[] = [];
  constructor(private RecipeService: RecipeService) {}

  ngOnInit() {
    this.recipes = this.RecipeService.getRecipe();
  }
  recipeSelected(recipe: Recipe) {
    this.onRecipeWasSelected.emit(recipe);
  }
}
