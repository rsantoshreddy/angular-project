import { Component, OnInit } from '@angular/core';
import { AccountsServises } from './services/accounts.services';

@Component({
  selector: 'app-root',
  templateUrl: './bank.component.html',
  styleUrls: ['./bank.component.less'],
  providers: [AccountsServises]
})
export class BankComponent implements OnInit {
  accounts: { name: string; status: string }[] = [];
  constructor(private accountServices: AccountsServises) {}

  ngOnInit() {
    this.accounts = this.accountServices.accounts;
  }
}
