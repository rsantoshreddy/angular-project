import { Component, OnInit, EventEmitter, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.less']
})
export class CockpitComponent {
  @Output('onServerCreated') createServer = new EventEmitter<{ name: string; description: string; type: string }>();
  @Output('onBluePrintCreated') createBluePrint = new EventEmitter<{
    name: string;
    description: string;
    type: string;
  }>();
  // newServerName = '';
  // newServerContent = '';
  @ViewChild('serverDescriptionInput', { static: false }) serverDescriptionInput: ElementRef;

  addServer(serverNameInput: HTMLInputElement) {
    this.createServer.emit({
      name: serverNameInput.value,
      description: this.serverDescriptionInput.nativeElement.value,
      type: 'server'
    });
  }
  addBluePrint(serverNameInput: HTMLInputElement) {
    this.createBluePrint.emit({
      name: serverNameInput.value,
      description: this.serverDescriptionInput.nativeElement.value,
      type: 'blueprint'
    });
  }
}
