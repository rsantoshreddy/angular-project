import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.less']
})
export class PipesComponent implements OnInit {
  filterKey = '';
  data = [
    {
      name: 'Production',
      status: 'Active',
      date: new Date(15, 1, 2019)
    },
    {
      name: 'Test',
      status: 'Active',
      date: new Date(16, 1, 2019)
    },
    {
      name: 'Stage',
      status: 'In Active',
      date: new Date(25, 1, 2019)
    }
  ];
  status = new Promise((resolve, reject) => {
    setTimeout(() => resolve('active'), 2000);
  });
  constructor() {}

  ngOnInit() {}

  onAddServer() {
    this.data.push({
      name: 'Stage',
      status: 'Active',
      date: new Date(25, 1, 2019)
    });
  }
}
