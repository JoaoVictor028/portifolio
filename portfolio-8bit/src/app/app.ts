import { Component, DestroyRef, HostListener, computed, inject, signal } from '@angular/core';
import { Locale } from './data/portfolio.data';
import { PortfolioContentService } from './core/services/portfolio-content.service';
import { AboutComponent } from './sections/about/about';
import { CertificationsComponent } from './sections/certifications/certifications';
import { ContactComponent } from './sections/contact/contact';
import { ExperienceComponent } from './sections/experience/experience';
import { HeroComponent } from './sections/hero/hero';
import { ProjectsComponent } from './sections/projects/projects';
import { SkillsComponent } from './sections/skills/skills';
import { TerminalComponent } from './sections/terminal/terminal';

@Component({
  selector: 'app-root',
  imports: [HeroComponent, AboutComponent, SkillsComponent, CertificationsComponent, ProjectsComponent, ExperienceComponent, TerminalComponent, ContactComponent],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly booting = signal(true);
  protected readonly bootLines = signal<readonly string[]>(['PORTFOLIO BIOS v1.0']);
  protected readonly isMenuOpen = signal(false);
  protected readonly easterEggVisible = signal(false);
  protected readonly currentYear = new Date().getFullYear();
  protected readonly isReady = computed(() => !this.booting());
  private readonly destroyRef = inject(DestroyRef);
  protected readonly content = inject(PortfolioContentService);
  private readonly konamiSequence = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight'];
  private enteredKeys: string[] = [];

  constructor() {
    const reducedMotion = typeof window !== 'undefined'
      && typeof window.matchMedia === 'function'
      && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const isPortuguese = this.content.locale() === 'pt';
    if (reducedMotion) {
      this.bootLines.set(['PORTFOLIO BIOS v1.0', isPortuguese ? 'MODO DE MOVIMENTO REDUZIDO... PRONTO' : 'REDUCED MOTION MODE... READY']);
      this.booting.set(false);
      return;
    }

    const lines = isPortuguese
      ? ['CPU............. ENGENHARIA DE SOFTWARE', 'MEMÓRIA......... PRONTA', 'STACK........... CARREGADA', 'DESTAQUES....... CARREGADOS', 'BOOT CONCLUÍDO']
      : ['CPU............. SOFTWARE ENGINEERING', 'MEMORY.......... READY', 'STACK........... LOADED', 'PROJECTS........ LOADED', 'BOOT COMPLETE'];
    const timers = lines.map((line, index) => window.setTimeout(() => this.bootLines.update((current) => [...current, line]), 170 * (index + 1)));
    const finishTimer = window.setTimeout(() => this.booting.set(false), 170 * (lines.length + 1));
    this.destroyRef.onDestroy(() => {
      timers.forEach((timer) => window.clearTimeout(timer));
      window.clearTimeout(finishTimer);
    });
  }

  protected closeMenu(): void { this.isMenuOpen.set(false); }
  protected toggleMenu(): void { this.isMenuOpen.update((open) => !open); }
  protected changeLocale(locale: Locale): void { this.content.setLocale(locale); }

  @HostListener('window:keydown', ['$event'])
  protected trackKonami(event: KeyboardEvent): void {
    this.enteredKeys = [...this.enteredKeys, event.key].slice(-this.konamiSequence.length);
    if (this.enteredKeys.join('|') === this.konamiSequence.join('|')) {
      this.easterEggVisible.set(true);
      const timer = window.setTimeout(() => this.easterEggVisible.set(false), 3200);
      this.destroyRef.onDestroy(() => window.clearTimeout(timer));
      this.enteredKeys = [];
    }
  }
}
