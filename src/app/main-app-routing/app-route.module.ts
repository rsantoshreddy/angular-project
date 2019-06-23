import { NgModule } from '@angular/core';
import { RecipeComponent } from '../recipe/recipe.component';
import { ShoppingListComponent } from '../shopping-list/shopping-list.component';
import { RouterModule } from '@angular/router';
import { RecipeDetailComponent } from '../recipe/recipe-detail/recipe-detail.component';
import { RecipeStartComponent } from '../recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from '../recipe/recipe-edit/recipe-edit.component';

const ROUTES = [
  {
    path: '',
    redirectTo: 'recipe',
    pathMatch: 'full'
  },
  {
    path: 'recipe',
    component: RecipeComponent,
    children: [
      { path: '', component: RecipeStartComponent },
      { path: 'new', component: RecipeEditComponent },
      { path: ':id', component: RecipeDetailComponent },
      { path: ':id/edit', component: RecipeEditComponent }
    ]
  },
  {
    path: 'shopping-list',
    component: ShoppingListComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class MainAppRoute {}
