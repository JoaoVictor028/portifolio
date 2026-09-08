import { Component, HostListener, inject, signal } from '@angular/core';
import { PortfolioProject } from '../../data/portfolio.data';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../shared/directives/reveal.directive';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [SectionHeadingComponent, RevealDirective],
  template: `
    <section class="section shell projects" id="projects" aria-labelledby="projects-title" appReveal="80">
      <app-section-heading index="04" [command]="content.data().projectsHeading.command" [title]="content.data().projectsHeading.title" />
      <p class="section-intro">{{ content.data().projectsHeading.intro }}</p>
      <div class="projects__grid">
        @for (project of content.data().projects; track project.id) {
          <article class="project-card" [class]="'project-card project-card--' + project.accent">
            <div class="project-card__notch" aria-hidden="true"></div>
            <header><span>{{ project.code }}</span><i>● {{ project.status }}</i></header>
            <div class="project-card__screen"><span>▥</span><small>{{ project.type }}</small></div>
            <h3>{{ project.name }}</h3>
            <p>{{ project.summary }}</p>
            <div class="tag-row">@for (tech of project.stack; track tech) { <span>{{ tech }}</span> }</div>
            <button type="button" class="project-card__open" (click)="openProject(project)" [attr.aria-label]="content.data().projectsHeading.openCase + ' ' + project.name">{{ content.data().projectsHeading.openCase }} <span>↗</span></button>
          </article>
        }
      </div>
    </section>

    @if (selectedProject(); as project) {
      <div class="project-modal" role="presentation" (click)="closeProject()">
        <section class="project-modal__dialog pixel-window" role="dialog" aria-modal="true" [attr.aria-labelledby]="'project-title-' + project.id" (click)="$event.stopPropagation()">
          <div class="window-bar"><span class="window-bar__name">{{ content.data().projectsHeading.caseFile }} // {{ project.code }}</span><button type="button" (click)="closeProject()" [attr.aria-label]="content.data().projectsHeading.close">×</button></div>
          <div class="project-modal__body">
            <div class="project-modal__intro"><span class="project-modal__stamp">{{ project.status }}</span><h2 [id]="'project-title-' + project.id">{{ project.name }}</h2><p>{{ project.type }}</p></div>
            <div class="project-modal__grid">
              <article><h3>{{ content.data().projectsHeading.problem }}</h3><p>{{ project.problem }}</p></article>
              <article><h3>{{ content.data().projectsHeading.architecture }}</h3><p>{{ project.architecture }}</p></article>
              <article><h3>{{ content.data().projectsHeading.challenges }}</h3><ul>@for (challenge of project.challenges; track challenge) { <li>{{ challenge }}</li> }</ul></article>
              <article><h3>{{ content.data().projectsHeading.solution }}</h3><p>{{ project.solution }}</p></article>
              <article class="project-modal__result"><h3>{{ content.data().projectsHeading.result }}</h3><p>{{ project.result }}</p></article>
            </div>
            <div class="tag-row">@for (tech of project.stack; track tech) { <span>{{ tech }}</span> }</div>
          </div>
        </section>
      </div>
    }
  `,
})
export class ProjectsComponent {
  protected readonly content = inject(PortfolioContentService);
  protected readonly selectedProject = signal<PortfolioProject | null>(null);

  openProject(project: PortfolioProject): void { this.selectedProject.set(project); }
  closeProject(): void { this.selectedProject.set(null); }

  @HostListener('document:keydown.escape')
  protected onEscape(): void { this.closeProject(); }
}
