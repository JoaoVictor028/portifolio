import { Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-experience',
  standalone: true,
  imports: [SectionHeadingComponent, RevealDirective],
  template: `
    <section class="section shell experience" id="experience" aria-labelledby="experience-title" appReveal="40">
      <app-section-heading index="05" [command]="content.data().experienceHeading.command" [title]="content.data().experienceHeading.title" />
      <div class="experience__timeline">
        @for (item of content.data().experience; track item.code; let index = $index) {
          <article class="experience-card pixel-panel"><span class="experience-card__index">0{{ index + 1 }}</span><div class="experience-card__body"><p class="eyebrow">{{ item.code }} <span>•</span> {{ item.period }}</p><h3>{{ item.role }}</h3><h4>{{ item.organization }}</h4><p>{{ item.description }}</p><div class="tag-row">@for (tag of item.tags; track tag) { <span>{{ tag }}</span> }</div></div></article>
        }
      </div>
    </section>
  `,
})
export class ExperienceComponent {
  protected readonly content = inject(PortfolioContentService);
}
