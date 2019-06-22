import { Injectable } from '@angular/core';
import { Server } from '../../models/server';

@Injectable({
  providedIn: 'root'
})
export class ServerServisesService {
  private servers: Server[] = [
    { id: 1, name: 's' },
    { id: 2, name: 'sa' },
    { id: 3, name: 'san' },
    { id: 4, name: 'sant' },
    { id: 5, name: 'santo' }
  ];

  getServers() {
    return this.servers.slice();
  }

  getServer(id: number) {
    return { ...this.servers[id] };
  }

  updateServer(id: number, name: string) {
    this.servers[id].name = name;
  }
}
