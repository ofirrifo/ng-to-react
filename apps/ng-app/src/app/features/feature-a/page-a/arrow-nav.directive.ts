import { Directive, ElementRef, EventEmitter, HostListener, Output, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngToReactArrowNav]',
})
export class ArrowNavDirective {
  @Output() itemSelected: EventEmitter<string> = new EventEmitter<string>();


  private readonly ACTIVE_ITEM_CSS_CLASS = 'active';

  constructor(private el: ElementRef, private renderer: Renderer2) {

  }

  @HostListener('document:keydown.Enter', ['$event'])
  onEnter(event: KeyboardEvent): void {
    event.preventDefault();
    this.itemSelected.emit(this.el.nativeElement.querySelector('.active').innerText);
    const activeElement = this.el.nativeElement.querySelector('.active');
    if (activeElement) {
      this.renderer.removeClass(activeElement, this.ACTIVE_ITEM_CSS_CLASS);
    }
  }


  @HostListener('document:keydown.ArrowDown', ['$event'])
  onKeyArrowDown(event: KeyboardEvent): void {
    event.preventDefault();

    const activeElement = this.el.nativeElement.querySelector('.active');
    let elementToActive = this.el.nativeElement.childNodes[0];
    if (activeElement) {
      this.renderer.removeClass(activeElement, this.ACTIVE_ITEM_CSS_CLASS);
      elementToActive = activeElement.nextSibling;
    }
    this.renderer.addClass(elementToActive, this.ACTIVE_ITEM_CSS_CLASS);
    elementToActive.focus();
  }

  @HostListener('document:keydown.ArrowUp', ['$event'])
  onKeyArrowUp(event: KeyboardEvent): void {
    event.preventDefault();
    const activeElement = this.el.nativeElement.querySelector('.active');
    let elementToActive = this.el.nativeElement.childNodes[0];
    if (activeElement) {
      this.renderer.removeClass(activeElement, this.ACTIVE_ITEM_CSS_CLASS);
      elementToActive = activeElement.previousSibling;
    }
    this.renderer.addClass(elementToActive, this.ACTIVE_ITEM_CSS_CLASS);
    elementToActive.focus();
  }
}
