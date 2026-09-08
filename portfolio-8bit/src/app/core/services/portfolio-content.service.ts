import { DOCUMENT } from '@angular/common';
import { Injectable, computed, inject, signal } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Locale, PORTFOLIO_CONTENT } from '../../data/portfolio.data';

@Injectable({ providedIn: 'root' })
export class PortfolioContentService {
  readonly locale = signal<Locale>('pt');
  readonly data = computed(() => PORTFOLIO_CONTENT[this.locale()]);

  private readonly document = inject(DOCUMENT);
  private readonly title = inject(Title);
  private readonly meta = inject(Meta);

  setLocale(locale: Locale): void {
    this.locale.set(locale);
    const content = PORTFOLIO_CONTENT[locale];
    this.document.documentElement.lang = locale === 'pt' ? 'pt-BR' : 'en';
    this.title.setTitle(content.documentTitle);
    this.meta.updateTag({ name: 'description', content: content.documentDescription });
  }
}
