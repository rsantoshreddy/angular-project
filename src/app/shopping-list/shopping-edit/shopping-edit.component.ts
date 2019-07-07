import {
  Component,
  OnInit
  // ViewChild, ElementRef, Output, EventEmitter
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

  constructor(private shoppingListService: ShoppingListService) {}

  ngOnInit() {}

  addItem(form: NgForm) {
    // const name = this.nameInput.nativeElement.value;
    // const amount = this.amountInput.nativeElement.value;
    const { value } = form;
    const ingredient = new Ingredient(value.name, value.amount);
    this.shoppingListService.addIngredient(ingredient);
  }
}
