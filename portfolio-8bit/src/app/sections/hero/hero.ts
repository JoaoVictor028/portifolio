import { Component, inject } from '@angular/core';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { PixelButtonComponent } from '../../shared/components/pixel-button/pixel-button';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [PixelButtonComponent],
  template: `
    <section class="hero shell" id="home" aria-labelledby="hero-title">
      <div class="hero__window pixel-window">
        <div class="window-bar">
          <span class="window-bar__name"><i></i> PORTFOLIO.EXE</span>
          <span class="window-bar__controls" aria-hidden="true">— □ ×</span>
        </div>
        <div class="hero__content">
          <div class="hero__copy">
            <p class="terminal-line"><span>&gt;</span> {{ content.data().hero.bootProfile }} <b>... OK</b></p>
            <p class="terminal-line"><span>&gt;</span> {{ content.data().hero.bootRuntime }} <b>... OK</b></p>
            <p class="hero__kicker">{{ content.data().hero.online }} <i class="status-dot"></i></p>
            <h1 id="hero-title">&lt; {{ content.data().profile.name }} <em>/&gt;</em></h1>
            <p class="hero__role">{{ content.data().profile.role }}</p>
            <p class="hero__tagline">{{ content.data().profile.tagline }}</p>
            <div class="hero__actions">
              <app-pixel-button href="#projects" [label]="content.data().hero.projectsAction">{{ content.data().hero.projectsAction }} <span>↘</span></app-pixel-button>
              <app-pixel-button href="#contact" [label]="content.data().hero.contactAction" variant="secondary">{{ content.data().hero.contactAction }} <span>↗</span></app-pixel-button>
            </div>
          </div>
          <div class="hero__visual" aria-hidden="true">
            <div class="radar-rings"></div>
            <div class="pixel-orb">
              <span class="pixel-orb__glow"></span>
              <span class="pixel-orb__face">&gt;_</span>
            </div>
            <span class="coordinate coordinate--one">x: 048.12</span>
            <span class="coordinate coordinate--two">y: 91.08</span>
            <span class="signal signal--one"></span><span class="signal signal--two"></span><span class="signal signal--three"></span>
          </div>
        </div>
        <div class="hero__statusbar">
          <span>{{ content.data().hero.build }}</span><span>{{ content.data().hero.mode }}</span><span>v1.0.0</span>
        </div>
      </div>
    </section>
  `,
})
export class HeroComponent {
  protected readonly content = inject(PortfolioContentService);
}
