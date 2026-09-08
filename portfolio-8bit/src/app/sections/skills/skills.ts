import { Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [SectionHeadingComponent, RevealDirective],
  template: `
    <section class="section shell skills" id="stack" aria-labelledby="skills-title" appReveal="40">
      <app-section-heading index="02" [command]="content.data().skillsHeading.command" [title]="content.data().skillsHeading.title" />
      <div class="skills__legend" [attr.aria-label]="content.data().skillsHeading.legend"><span><i class="level level--core"></i> {{ content.data().skillsHeading.core }}</span><span><i class="level level--advanced"></i> {{ content.data().skillsHeading.advanced }}</span><span><i class="level level--working"></i> {{ content.data().skillsHeading.working }}</span></div>
      <div class="skills__grid">
        @for (category of content.data().skills; track category.name) {
          <article class="skill-card pixel-panel" [class]="'skill-card pixel-panel skill-card--' + category.color">
            <header><span class="skill-card__bracket">[</span><h3>{{ category.name }}</h3><span class="skill-card__bracket">]</span></header>
            <ul>
              @for (skill of category.skills; track skill.name) {
                <li><span>{{ skill.name }}</span><span class="skill-meter" [attr.aria-label]="skill.level"><i [class]="'level level--' + (skill.level === 'WORKING KNOWLEDGE' ? 'working' : skill.level.toLowerCase())"></i><b>@switch (skill.level) { @case ('CORE') { {{ content.data().skillsHeading.core }} } @case ('ADVANCED') { {{ content.data().skillsHeading.advanced }} } @default { {{ content.data().skillsHeading.working }} } }</b></span></li>
              }
            </ul>
          </article>
        }
      </div>
    </section>
  `,
})
export class SkillsComponent {
  protected readonly content = inject(PortfolioContentService);
}
