import { Directive, ElementRef, Input, Renderer2, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[appClickStyle]',
})
export class ClickStyleDirective {
  @Input() value: 'X' | 'O' | undefined;

  constructor(private element: ElementRef, private renderer: Renderer2) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['value']) {
      this.applyStyles();
    }
  }

  private applyStyles(): void {
    let backgroundColor = '#43115B';

    if (this.value === 'X') {
      backgroundColor = '#48D2FE';
    } else if (this.value === 'O') {
      backgroundColor = '#E2BE00';
    }

    this.renderer.setStyle(this.element.nativeElement, 'background-color', backgroundColor);
  }
}
