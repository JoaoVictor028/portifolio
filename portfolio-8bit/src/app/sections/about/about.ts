import { Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [SectionHeadingComponent, RevealDirective],
  template: `
    <section class="section shell about" id="about" aria-labelledby="about-title" appReveal>
      <app-section-heading index="01" [command]="content.data().about.command" [title]="content.data().about.title" />
      <div class="about__grid">
        <article class="terminal-panel about__terminal">
          <div class="terminal-panel__bar"><span class="terminal-lights"><i></i><i></i><i></i></span><span>{{ content.locale() === 'pt' ? 'perfil' : 'profile' }}@portfolio:~</span></div>
          <div class="terminal-panel__body">
            <p><span class="prompt">$</span> {{ content.locale() === 'pt' ? 'perfil' : 'profile' }}</p>
            <h3>{{ content.data().profile.role }}</h3>
            <p><span class="prompt">$</span> {{ content.data().about.currentFocus }}</p>
            <ul>
              @for (focus of content.data().profile.currentFocus; track focus) { <li>{{ focus }}</li> }
            </ul>
            <p><span class="prompt">$</span> {{ content.data().about.status }}</p>
            <strong class="terminal-status"><i></i> {{ content.data().profile.availability }}</strong>
          </div>
        </article>
        <div class="about__narrative">
          <p class="display-copy">{{ content.data().about.lead }}</p>
          <p>{{ content.data().about.body }}</p>
          <dl class="about__facts">
            <div><dt>{{ content.data().about.base }}</dt><dd>{{ content.data().profile.location }}</dd></div>
            <div><dt>{{ content.data().about.approach }}</dt><dd>{{ content.data().about.approachValue }}</dd></div>
            <div><dt>{{ content.data().about.status }}</dt><dd>{{ content.data().about.statusValue }}</dd></div>
          </dl>
        </div>
      </div>
    </section>
  `,
})
export class AboutComponent {
  protected readonly content = inject(PortfolioContentService);
}
