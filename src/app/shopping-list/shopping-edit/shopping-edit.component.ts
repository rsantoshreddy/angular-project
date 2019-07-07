import {
  Component,
  OnInit,
  ViewChild
  // ElementRef, Output, EventEmitter
} from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';
import { ShoppingListService } from '../shopping-list-service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.less']
})
export class ShoppingEditComponent implements OnInit {
  // @ViewChild('nameInput', { static: true }) nameInput: ElementRef;
  // @ViewChild('amountInput', { static: true }) amountInput: ElementRef;
  @ViewChild('f', { static: true }) shoppingListEditForm: NgForm;
  editMode: Boolean = false;
  editedItem: number;
  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {
    this.shoppingListService.ingredientEditStarted.subscribe((index: number) => {
      this.editMode = true;
      this.editedItem = index;
      const ingredient = this.shoppingListService.getIngredient(index);
      this.shoppingListEditForm.setValue(ingredient);
    });
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
    this.editMode = false;
    this.shoppingListEditForm.reset();
  }

  onClearForm() {
    this.shoppingListEditForm.reset();
    this.editMode = false;
  }
  onDelete() {
    this.shoppingListService.deleteIngredient(this.editedItem);
    this.onClearForm();
  }
}
