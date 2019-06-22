import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServise } from 'src/app/guards/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router, private autheServise: AuthServise) {}

  ngOnInit() {}
  goToServers() {
    this.router.navigate(['/servers']);
  }
  goToServer(id: number) {
    this.router.navigate(['/servers', id, 'edit'], { queryParams: { editingServer: 1 }, fragment: 'HI there' });
  }

  login() {
    this.autheServise.login();
  }
  logout() {
    this.autheServise.logout();
  }
}
