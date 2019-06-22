import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.less']
})
export class UserComponent implements OnInit, OnDestroy {
  constructor(private activeRoute: ActivatedRoute) {}
  user: { id: string; name: string };
  paramsSubscription: Subscription;
  ngOnInit() {
    this.user = {
      id: this.activeRoute.snapshot.params['id'],
      name: this.activeRoute.snapshot.params['name']
    };
    this.paramsSubscription = this.activeRoute.params.subscribe((params: Params) => {
      this.user.id = params['id'];
      this.user.name = params['name'];
    });
  }

  ngOnDestroy() {
    this.paramsSubscription.unsubscribe();
  }
}
