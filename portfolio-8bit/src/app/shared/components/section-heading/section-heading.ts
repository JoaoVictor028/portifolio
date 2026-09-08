import { Component, input } from '@angular/core';

@Component({
  selector: 'app-section-heading',
  standalone: true,
  template: `
    <div class="section-heading">
      <span class="section-heading__index">{{ index() }}</span>
      <div>
        <p class="eyebrow">{{ command() }}</p>
        <h2>{{ title() }}</h2>
      </div>
    </div>
  `,
})
export class SectionHeadingComponent {
  readonly index = input.required<string>();
  readonly command = input.required<string>();
  readonly title = input.required<string>();
}
