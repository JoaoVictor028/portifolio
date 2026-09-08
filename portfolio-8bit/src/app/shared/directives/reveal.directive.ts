import { AfterViewInit, DestroyRef, Directive, ElementRef, HostBinding, inject, input, numberAttribute } from '@angular/core';

@Directive({ selector: '[appReveal]', standalone: true })
export class RevealDirective implements AfterViewInit {
  readonly delay = input(0, { alias: 'appReveal', transform: numberAttribute });
  @HostBinding('class.is-visible') protected isVisible = typeof IntersectionObserver === 'undefined';

  private readonly element = inject(ElementRef<HTMLElement>);
  private readonly destroyRef = inject(DestroyRef);

  ngAfterViewInit(): void {
    const node = this.element.nativeElement;
    node.style.setProperty('--reveal-delay', `${this.delay()}ms`);

    if (typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        this.isVisible = true;
        observer.disconnect();
      }
    }, { threshold: 0.12 });

    observer.observe(node);
    this.destroyRef.onDestroy(() => observer.disconnect());
  }
}
