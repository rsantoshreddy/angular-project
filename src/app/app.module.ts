import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

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
import { ShoppingListService } from './shopping-list/shopping-list-service';
import { CourseRouteComponent } from './course-route/course-route.component';
import { HomeComponent } from './course-route/home/home.component';
import { UsersComponent } from './course-route/users/users.component';
import { ServersComponent } from './course-route/servers/servers.component';
import { ServerComponent as RouteServerComponent } from './course-route/servers/server/server.component';
import { UserComponent } from './course-route/users/user/user.component';
import { ServerEditComponent } from './course-route/servers/server-edit/server-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AppRouteModule } from './app-route.module';
import { AppGuard } from './guards/app-guard.service';
import { AuthServise } from './guards/auth.service';
import { CanDeactivateGuard } from './guards/can-deactivate.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './course-route/servers/services/server-resolver.service';
import { MainAppRoute } from './main-app-routing/app-route.module';
import { RecipeStartComponent } from './recipe/recipe-start/recipe-start.component';
import { RecipeEditComponent } from './recipe/recipe-edit/recipe-edit.component';
import { SubjectService } from './shared/subject.service';
import { FormComponent } from './form/form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { RecipeService } from './recipe/recipe-service';
import { PipesComponent } from './pipes/pipes.component';
import { Shorten } from './pipes/custom.pipe';
import { FilterPipe } from './pipes/filter.pipe';

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
    NewAccountComponent,
    CourseRouteComponent,
    HomeComponent,
    UsersComponent,
    ServersComponent,
    UserComponent,
    ServerEditComponent,
    NotFoundComponent,
    RouteServerComponent,
    ErrorPageComponent,
    RecipeStartComponent,
    RecipeEditComponent,
    FormComponent,
    ReactiveFormComponent,
    PipesComponent,
    Shorten,
    FilterPipe
  ],
  imports: [BrowserModule, /*AppRoutingModule,*/ FormsModule, /*AppRouteModule,*/ MainAppRoute, ReactiveFormsModule],
  providers: [
    ShoppingListService,
    AuthServise,
    AppGuard,
    CanDeactivateGuard,
    ServerResolver,
    SubjectService,
    RecipeService
  ],
  bootstrap: [PipesComponent]
})
export class AppModule {}
