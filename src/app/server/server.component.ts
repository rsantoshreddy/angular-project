import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.less'],
  encapsulation: ViewEncapsulation.Emulated //Native, None, Shadowdom
})
export class ServerComponent {
  day: number;
  constructor() {
    this.day = 5;
  }
  serverElements = [{ name: 'test', type: 'server', description: 'test' }];

  serverCreated(serverData: { name: string; type: string; description: string }) {
    this.serverElements.push(serverData);
  }
  bluePrintCreated(serverData: { name: string; type: string; description: string }) {
    this.serverElements.push(serverData);
  }
  onFirstChange() {
    this.serverElements[0] = { name: 'hi there', description: 'hi', type: 'server' };
  }
  deleFirstElement() {
    this.serverElements.splice(0, 1);
  }
}
