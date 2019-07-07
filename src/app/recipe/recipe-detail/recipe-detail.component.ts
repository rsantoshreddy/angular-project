import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe-service';
import { ActivatedRoute, Params, Router } from '@angular/router';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.less']
})
export class RecipeDetailComponent implements OnInit {
  // @Input() recipe: Recipe;
  recipe: Recipe;
  constructor(private recipeService: RecipeService, private router: Router, private activedRoute: ActivatedRoute) {}

  ngOnInit() {
    // this.recipe = this.recipeService.getRecipe(this.activedRoute.snapshot.params['id']);
    this.activedRoute.params.subscribe((params: Params) => {
      const id = +params['id'];
      this.recipe = this.recipeService.getRecipe(id);
    });
  }

  addToShoppingList() {
    this.recipeService.addToShoppingList(this.recipe.ingredients);
  }
  editRecipe() {
    this.router.navigate(['edit'], { relativeTo: this.activedRoute });
  }
  onDeleteRecipe(id: number) {
    this.recipeService.deleteRecipe(id);
    this.router.navigate(['recipe']);
  }
}
