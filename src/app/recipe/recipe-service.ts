import { Recipe } from './recipe.model';
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('test', 'description', 'https://images.media-allrecipes.com/images/55319.jpg?width=420&height=237'),
    new Recipe('new ', 'description', 'https://images.media-allrecipes.com/images/55319.jpg?width=420&height=237')
  ];

  getRecipe() {
    return this.recipes.slice();
  }
}
