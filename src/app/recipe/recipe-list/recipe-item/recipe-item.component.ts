import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model';
import { RecipeService } from '../../recipe-service';

@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.less']
})
export class RecipeItemComponent implements OnInit {
  @Input('recipe') recipeItem: Recipe;
  constructor(private recipeSErvice: RecipeService) {}

  ngOnInit() {}

  // recipeSelected() {
  //   this.recipeSErvice.recipeSelected.emit(this.recipeItem);
  // }
}
