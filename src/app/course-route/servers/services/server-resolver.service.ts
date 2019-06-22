import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Server } from '../../models/server';
import { Injectable } from '@angular/core';
import { ServerServisesService } from './server-servises.service';

@Injectable()
export class ServerResolver implements Resolve<Server> {
  constructor(private serverService: ServerServisesService) {}
  resolve(
    activatedRouteSnapshot: ActivatedRouteSnapshot,
    routerStateSnapshot: RouterStateSnapshot
  ): Observable<Server> | Promise<Server> | Server {
    return this.serverService.getServer(+activatedRouteSnapshot.params.id);
  }
}
