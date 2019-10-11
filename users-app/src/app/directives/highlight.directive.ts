import { Directive, ElementRef, HostBinding, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  @Input("myColor") myColor : string;
  @HostBinding('style.backgroundColor') bgColor : any;

  @HostListener('mouseenter') onmouseeneter(){
    this.bgColor = this.myColor;
  }
  @HostListener('mouseleave') onmouseleave(){
    this.bgColor = "transparent";
  }

  constructor(private elementRef : ElementRef) {
    // this.elementRef.nativeElement.style.backgroundColor = "aqua";
  }

}
