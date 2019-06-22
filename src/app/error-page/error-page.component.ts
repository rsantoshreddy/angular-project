import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Data } from '@angular/router';

@Component({
  selector: 'app-error-page',
  templateUrl: './error-page.component.html',
  styleUrls: ['./error-page.component.less']
})
export class ErrorPageComponent implements OnInit {
  errorMessage: string;
  constructor(private activateRoute: ActivatedRoute) {}

  ngOnInit() {
    this.activateRoute.data.subscribe((data: Data) => {
      this.errorMessage = data.message;
    });
  }
}
