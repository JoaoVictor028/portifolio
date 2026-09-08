import { Component, input } from '@angular/core';

@Component({
  selector: 'app-pixel-button',
  standalone: true,
  template: `
    @if (href()) {
      <a class="pixel-button" [class.pixel-button--secondary]="variant() === 'secondary'" [href]="href()" [attr.aria-label]="label()"><ng-content /></a>
    } @else {
      <button class="pixel-button" [class.pixel-button--secondary]="variant() === 'secondary'" type="button" [attr.aria-label]="label()"><ng-content /></button>
    }
  `,
})
export class PixelButtonComponent {
  readonly href = input<string | null>(null);
  readonly label = input('Action');
  readonly variant = input<'primary' | 'secondary'>('primary');
}
