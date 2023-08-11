import {
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[ngToReactArrowNav]',
})
export class ArrowNavDirective {
  @Output() itemSelected: EventEmitter<string> = new EventEmitter<string>();

  private readonly ACTIVE_ITEM_CSS_CLASS = 'active';
  private readonly ACTIVE_ITEM_SELECTOR = `.${this.ACTIVE_ITEM_CSS_CLASS}`;

  constructor(private el: ElementRef, private renderer: Renderer2) {}

  @HostListener('document:keydown.Enter', ['$event'])
  onEnter(event: KeyboardEvent) {
    event.preventDefault();

    const activeElement = this.el.nativeElement.querySelector(this.ACTIVE_ITEM_SELECTOR);
    if (activeElement) {
      this.itemSelected.emit(activeElement.innerText);
      this.renderer.removeClass(activeElement, this.ACTIVE_ITEM_CSS_CLASS);
    }
  }

  private onKeyArrow(
    event: KeyboardEvent,
    nextSelector: (element: HTMLElement) => ChildNode | null
  ) {
    event.preventDefault();

    const activeElement = this.el.nativeElement.querySelector(this.ACTIVE_ITEM_SELECTOR);
    const selectedElement = this.el.nativeElement.querySelector('.selected');
    let elementToActive = this.el.nativeElement.childNodes[0];
    if (activeElement) {
      this.renderer.removeClass(activeElement, this.ACTIVE_ITEM_CSS_CLASS);
      elementToActive = nextSelector(activeElement);
    } else if (selectedElement) {
      elementToActive = nextSelector(selectedElement);
    }
    this.renderer.addClass(elementToActive, this.ACTIVE_ITEM_CSS_CLASS);
    elementToActive.focus();
  }

  @HostListener('document:keydown.ArrowDown', ['$event'])
  onKeyArrowDown(event: KeyboardEvent) {
    this.onKeyArrow(event, (element) => element.nextSibling);
  }

  @HostListener('document:keydown.ArrowUp', ['$event'])
  onKeyArrowUp(event: KeyboardEvent) {
    this.onKeyArrow(event, (element) => element.previousSibling);
  }
}
