import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';

import { HomeComponent } from './course-route/home/home.component';
import { UsersComponent } from './course-route/users/users.component';
import { UserComponent } from './course-route/users/user/user.component';
import { ServersComponent } from './course-route/servers/servers.component';
import { ServerEditComponent } from './course-route/servers/server-edit/server-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ServerComponent } from './course-route/servers/server/server.component';
import { AppGuard } from './guards/app-guard.service';
import { CanDeactivateGuard } from './guards/can-deactivate.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './course-route/servers/services/server-resolver.service';

const ROUTES: Route[] = [
  { path: '', component: HomeComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:id/:name', component: UserComponent },
  {
    path: 'servers',
    // canActivate: [AppGuard],
    canActivateChild: [AppGuard],
    component: ServersComponent,
    children: [
      { path: ':id', component: ServerComponent, resolve: { server: ServerResolver } },
      { path: ':id/edit', component: ServerEditComponent, canDeactivate: [CanDeactivateGuard] }
    ]
  },
  //   { path: 'not-found', component: NotFoundComponent },
  { path: 'not-found', component: ErrorPageComponent, data: { message: 'Page Not Found' } },
  { path: '**', redirectTo: 'not-found' }
];

@NgModule({
  //imports: [RouterModule.forRoot(ROUTES, { useHash: true })],
  imports: [RouterModule.forRoot(ROUTES)],
  exports: [RouterModule]
})
export class AppRouteModule {}
