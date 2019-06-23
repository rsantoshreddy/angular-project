import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  ngOnInit(): void {}
  // @Output('changeFeature') changeFeature = new EventEmitter<string>();

  laodFeature(feature: string) {
    // this.changeFeature.emit(feature);
  }
}
