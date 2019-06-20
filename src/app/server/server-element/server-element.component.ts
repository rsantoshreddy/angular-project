import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewChecked,
  AfterViewInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.less']
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy {
  @Input() element: { name: string; type: string; description: string };
  @ViewChild('heading', { static: true }) heading: ElementRef;
  @ContentChild('contentSpan', { static: true }) contentSpan: ElementRef;

  constructor() {
    console.log('constructor called!');
  }
  //This method will not be called for the changes to the objects it receive.
  // This will be called only for the the primitive values.
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges called!');
    console.log(changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit called!');
    console.log('ngOnInit heading>>', this.heading.nativeElement.textContent);
    console.log('ngOnInit contentSpan>>', this.contentSpan.nativeElement.textContent);
  }

  ngDoCheck(): void {
    console.log('ngDoCheck called!');
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit(): called!');
    console.log('ngAfterContentInit contentSpan>>', this.contentSpan.nativeElement.textContent);
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked called!');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit(): vo called!');
    console.log('ngAfterViewInit heading>>', this.heading.nativeElement.textContent);
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked(): called!');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy(): called!');
  }
}
