import { EventEmitter } from '@angular/core';

export class AccountsServises {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Test Account',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
  }

  addAccount(account: { name: string; status: string }) {
    this.accounts.push(account);
  }

  //For cross component communications
  statusUpdated = new EventEmitter<string>();
}
