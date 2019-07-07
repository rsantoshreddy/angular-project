import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  onSubmit(f: NgForm) {
    console.log(f);
  }
}
