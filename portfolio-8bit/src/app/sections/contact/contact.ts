import { Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { PixelButtonComponent } from '../../shared/components/pixel-button/pixel-button';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [PixelButtonComponent, SectionHeadingComponent, RevealDirective],
  template: `
    <section class="section shell contact" id="contact" aria-labelledby="contact-title" appReveal="40">
      <app-section-heading index="07" [command]="content.data().contact.command" [title]="content.data().contact.title" />
      <div class="contact__panel pixel-panel">
        <div class="contact__signal" aria-hidden="true"><span></span><span></span><span></span><i>⌁</i></div>
        <div class="contact__copy"><p class="eyebrow">{{ content.data().contact.channel }}</p><h3>{{ content.data().contact.heading }}</h3><p>{{ content.data().contact.body }}</p></div>
        <div class="contact__links">
          @for (contact of content.data().contacts; track contact.label) {
            @if (contact.url) {
              <a [href]="contact.url" class="contact-link" target="_blank" rel="noopener"><span>{{ contact.icon }}</span><div><b>{{ contact.label }}</b><small>{{ contact.handle }}</small></div><i>↗</i></a>
            } @else {
              <div class="contact-link contact-link--inactive" [attr.aria-label]="contact.label" role="group"><span>{{ contact.icon }}</span><div><b>{{ contact.label }}</b><small>{{ contact.handle }}</small></div><i>{{ content.data().contact.locked }}</i></div>
            }
          }
        </div>
        <app-pixel-button href="#terminal" [label]="content.data().contact.openTerminal" variant="secondary">{{ content.data().contact.openTerminal }} <span>_</span></app-pixel-button>
      </div>
    </section>
  `,
})
export class ContactComponent {
  protected readonly content = inject(PortfolioContentService);
}
