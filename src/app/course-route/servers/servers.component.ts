import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ServerServisesService } from './services/server-servises.service';
import { Server } from '../models/server';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.less'],
  providers: [ServerServisesService]
})
export class ServersComponent implements OnInit {
  servers: Server[];
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private serverService: ServerServisesService
  ) {}

  ngOnInit() {
    this.servers = this.serverService.getServers();
  }
  navigateToServers() {
    // this.router.navigate(['servers'], { relativeTo: this.activatedRoute });
  }
}
