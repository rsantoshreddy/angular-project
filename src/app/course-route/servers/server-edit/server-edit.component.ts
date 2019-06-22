import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ServerServisesService } from '../services/server-servises.service';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-server-edit',
  templateUrl: './server-edit.component.html',
  styleUrls: ['./server-edit.component.less']
})
export class ServerEditComponent implements OnInit, CanComponentDeactivate {
  @ViewChild('nameInput', { static: false }) nameInput: ElementRef;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private serverService: ServerServisesService
  ) {}
  allowEdit: Boolean = false;
  serverId: number;
  ngOnInit() {
    const queryParams = this.activatedRoute.snapshot.queryParams;
    const fragment = this.activatedRoute.snapshot.fragment;
    console.log(queryParams);
    console.log(fragment);

    this.activatedRoute.queryParams.subscribe((params: Params) => {
      this.allowEdit = params.allowEdit === 'true';
    });
    this.activatedRoute.params.subscribe((params: Params) => {
      this.serverId = +params.id;
    });
    // this.activedRoute.fragment.subscribe();
  }
  updateServer() {
    this.serverService.updateServer(this.serverId, this.nameInput.nativeElement.value);
    this.router.navigate(['../'], { relativeTo: this.activatedRoute });
  }
  canDeactivate(): Observable<boolean> | Promise<boolean> | boolean {
    if (!this.allowEdit) {
      return true;
    }
    if (this.nameInput.nativeElement.value !== this.serverId) {
      return confirm('Are you sure to go back');
    } else {
      return true;
    }
  }
}
