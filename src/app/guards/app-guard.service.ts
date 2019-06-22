import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild } from '@angular/router';
import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { AuthServise } from './auth.service';

@Injectable()
export class AppGuard implements CanActivate, CanActivateChild {
  constructor(private authService: AuthServise, private router: Router) {}
  canActivate(
    activeRouterSnapshot: ActivatedRouteSnapshot,
    routerStateSnapshot: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.authenticate().then(isAuthenticated => {
      if (isAuthenticated) {
        return true;
      } else {
        this.router.navigate(['/']);
      }
    });
  }

  canActivateChild(
    activeRouterSnapshot: ActivatedRouteSnapshot,
    routerStateSnapshot: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    return this.canActivate(activeRouterSnapshot, routerStateSnapshot);
  }
}
