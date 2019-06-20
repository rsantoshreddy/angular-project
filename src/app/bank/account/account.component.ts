import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AccountsServises } from '../services/accounts.services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.less']
})
export class AccountComponent {
  @Input() account: { name: string; status: string };
  @Input() id: number;

  constructor(private accountServices: AccountsServises) {}

  onSetTo(status: string) {
    this.accountServices.updateStatus(this.id, status);
  }
}
