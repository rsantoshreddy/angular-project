import {
  Component,
  OnInit,
  ViewChild,
  OnDestroy
  // ElementRef, Output, EventEmitter
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list-service';
import { NgForm } from '@angular/forms';
import { Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.less']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  // @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  // @ViewChild('amountInput', { static: true }) amountInput: ElementRef;
  @ViewChild('f', { static: true }) shoppingListEditForm: NgForm;
  editMode: Boolean = false;
  editedItem: number;
  subscriptions: Subscription[] = [];
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    const subscription = this.shoppingListService.ingredientEditStarted.subscribe((index: number) => {
      this.editMode = true;
      this.editedItem = index;
      const ingredient = this.shoppingListService.getIngredient(index);
      this.shoppingListEditForm.setValue(ingredient);
    });
    this.subscriptions.push(subscription);
  }

  addItem(form: NgForm) {
    // const name = this.nameInput.nativeElement.value;
    // const amount = this.amountInput.nativeElement.value;
    const { value } = form;
    const ingredient = new Ingredient(value.name, value.amount);
    if (this.editMode) {
      this.shoppingListService.updateIngredient(this.editedItem, ingredient);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    this.onClearForm();
  }

  onClearForm() {
    this.shoppingListEditForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItem);
    this.onClearForm();
  }
  ngOnDestroy() {
    this.subscriptions.forEach(subscription => subscription.unsubscribe());
  }
}
