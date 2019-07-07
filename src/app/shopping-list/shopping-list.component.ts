import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list-service';
import { SubjectService } from '../shared/subject.service';
import { Subscription } from 'types/rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.less']
})
export class ShoppingListComponent implements OnInit, OnDestroy {
  ingredients: Ingredient[] = [];
  subscriptions: Subscription[] = [];
  constructor(private shoppingListService: ShoppingListService, private subjectService: SubjectService) {}

  ngOnInit() {
    this.ingredients = this.shoppingListService.getIngredients();
    const subscription = this.shoppingListService.ingredientsChanged.subscribe((ingredients: Ingredient[]) => {
      this.ingredients = ingredients;
    });
    this.subscriptions.push(subscription);
    // this.subjectService.activatedItem.subscribe((data: string) => {
    //   console.log(data);
    // });
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => {
      subscription.unsubscribe();
    });
  }

  onEdit(index: number) {
    this.shoppingListService.ingredientEditStarted.next(index);
  }
}
