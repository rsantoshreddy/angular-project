import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AccountsServises } from '../services/accounts.services';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.less']
})
export class NewAccountComponent implements OnInit {
  @Output() accountCreated = new EventEmitter<{ name: string; status: string }>();

  constructor(private accountsServices: AccountsServises) {}

  ngOnInit() {}
  onAccountCreate(name: string, status: string) {
    this.accountsServices.addAccount({ name, status });
  }
}
