import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicFormatter]'
})
export class BasicFormatterDirective implements OnInit {
  constructor(private elementRef: ElementRef) {}
  ngOnInit(): void {
    this.elementRef.nativeElement.style.backgroundColor = 'red';
  }
}
