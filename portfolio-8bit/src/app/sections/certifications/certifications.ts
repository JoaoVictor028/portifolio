import { Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-certifications',
  standalone: true,
  imports: [SectionHeadingComponent, RevealDirective],
  template: `
    <section class="section shell certifications" id="credentials" aria-labelledby="certifications-title" appReveal="40">
      <app-section-heading index="03" [command]="content.data().certificationsHeading.command" [title]="content.data().certificationsHeading.title" />
      <p class="section-intro">{{ content.data().certificationsHeading.intro }}</p>
      <div class="certifications__grid">
        @for (certification of content.data().certifications; track certification.code) {
          <article class="certification-card pixel-panel">
            <span class="certification-card__code">{{ certification.code }}</span>
            <div>
              <h3>{{ certification.title }}</h3>
              <p>{{ certification.detail }}</p>
              <div class="tag-row">@for (topic of certification.topics; track topic) { <span>{{ topic }}</span> }</div>
            </div>
          </article>
        }
      </div>
    </section>
  `,
})
export class CertificationsComponent {
  protected readonly content = inject(PortfolioContentService);
}
