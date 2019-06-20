import { Directive, HostListener, ElementRef, HostBinding } from '@angular/core';

@Directive({
  selector: '[appDropDown]'
})
export class DropDownDirective {
  @HostBinding('class.open') isOpen = false;
  @HostListener('click') toggleDropDwon() {
    this.isOpen = !this.isOpen;
  }
}
