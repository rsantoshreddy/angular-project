import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeComponent } from './recipe/recipe.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { RecipeDetailComponent } from './recipe/recipe-detail/recipe-detail.component';
import { RecipeListComponent } from './recipe/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe/recipe-list/recipe-item/recipe-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { ServerComponent } from './server/server.component';
import { CockpitComponent } from './server/cockpit/cockpit.component';
import { ServerElementComponent } from './server/server-element/server-element.component';
import { BasicFormatterDirective } from './server/directives/basic-formatter.directive';
import { BetterFormatterDirective } from './server/directives/better-formatter.directive';
import { UnlessDirective } from './server/directives/unless.directive';
import { DropDownDirective } from './directives/dropdown.directive';
import { BankComponent } from './bank/bank.component';
import { AccountComponent } from './bank/account/account.component';
import { NewAccountComponent } from './bank/new-account/new-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    RecipeComponent,
    ShoppingListComponent,
    RecipeDetailComponent,
    RecipeListComponent,
    RecipeItemComponent,
    ShoppingEditComponent,
    ServerComponent,
    CockpitComponent,
    ServerElementComponent,
    BasicFormatterDirective,
    BetterFormatterDirective,
    UnlessDirective,
    DropDownDirective,
    BankComponent,
    AccountComponent,
    NewAccountComponent
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
