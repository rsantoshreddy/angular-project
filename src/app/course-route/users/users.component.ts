import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../users/models/user';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.less']
})
export class UsersComponent implements OnInit {
  constructor(private router: Router) {}
  users: User[] = [
    { id: 1, name: 's' },
    { id: 2, name: 'sa' },
    { id: 3, name: 'san' },
    { id: 4, name: 'sant' },
    { id: 5, name: 'santo' }
  ];
  ngOnInit() {}
  goToUser(user: User) {
    this.router.navigate(['users', user.id, user.name]);
  }
}
