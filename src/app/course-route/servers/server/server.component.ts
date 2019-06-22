import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router, Data } from '@angular/router';
import { Server } from '../../models/server';
import { ServerServisesService } from '../services/server-servises.service';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.less']
})
export class ServerComponent implements OnInit {
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private serverService: ServerServisesService
  ) {}
  server: Server;

  ngOnInit() {
    // this.server = {
    //   id: this.activatedRoute.snapshot.params.id,
    //   name: this.activatedRoute.snapshot.params.name
    // };
    // this.activatedRoute.params.subscribe((params: Params) => {
    //   this.server = this.serverService.getServer(params.id);
    // });

    this.activatedRoute.data.subscribe((data: Data) => {
      this.server = data.server;
    });
  }

  editServer() {
    this.router.navigate(['edit'], {
      relativeTo: this.activatedRoute,
      queryParamsHandling: 'preserve',
      preserveFragment: true
    });
  }
}
