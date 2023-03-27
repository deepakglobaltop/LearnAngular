import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighLight]'
})
export class HighLightDirective {

  constructor(private element:ElementRef) {
    
   }
@HostListener('mouseenter')
   highLight() {
    this.element.nativeElement.style.background="red";
   }

   @HostListener('mouseleave')
   highLight1() {
    this.element.nativeElement.style.background=null;
   }



}
