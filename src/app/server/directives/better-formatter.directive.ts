import { Directive, ElementRef, Renderer2, OnInit, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterFormatter]'
})
export class BetterFormatterDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input('appBetterFormatter') highlightColor: string = 'blue';

  ngOnInit(): void {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
  }
  constructor(private elementRef: ElementRef, private renderer: Renderer2) {}

  @HostBinding('style.backgroundColor') backgroungColor: string;
  @HostListener('mouseenter') mouseEnter() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'blue');
    // this.backgroungColor = 'blue';
    this.backgroungColor = this.highlightColor;
  }
  @HostListener('mouseleave') mouseLeave() {
    // this.renderer.setStyle(this.elementRef.nativeElement, 'background-color', 'transparent');
    // this.backgroungColor = 'transparent';
    this.backgroungColor = this.defaultColor;
  }
}
