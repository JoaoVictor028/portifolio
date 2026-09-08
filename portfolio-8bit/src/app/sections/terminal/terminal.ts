import { Component, computed, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { PortfolioContentService } from '../../core/services/portfolio-content.service';
import { SectionHeadingComponent } from '../../shared/components/section-heading/section-heading';
import { RevealDirective } from '../../shared/directives/reveal.directive';

interface TerminalEntry {
  kind: 'command' | 'response' | 'success' | 'error';
  text: string;
}

@Component({
  selector: 'app-terminal',
  standalone: true,
  imports: [FormsModule, SectionHeadingComponent, RevealDirective],
  template: `
    <section class="section shell interactive-terminal" id="terminal" aria-labelledby="terminal-title" appReveal="40">
      <app-section-heading index="06" [command]="content.data().terminal.command" [title]="content.data().terminal.title" />
      <div class="terminal-panel terminal-panel--interactive">
        <div class="terminal-panel__bar"><span class="terminal-lights"><i></i><i></i><i></i></span><span>{{ content.locale() === 'pt' ? 'visitante' : 'visitor' }}@portfolio:~</span><span class="terminal-panel__right">{{ content.data().terminal.secure }}</span></div>
        <div class="terminal-panel__body terminal-panel__body--interactive" aria-live="polite">
          @if (history().length === 0) { <p class="terminal-entry terminal-entry--success">{{ content.data().terminal.ready }}</p> }
          @for (entry of history(); track $index) { <p [class]="'terminal-entry terminal-entry--' + entry.kind">@if (entry.kind === 'command') { <span class="prompt">{{ content.locale() === 'pt' ? 'visitante' : 'visitor' }}@portfolio:~$</span> } {{ entry.text }}</p> }
          <form class="terminal-input" (submit)="execute($event)">
            <label for="terminal-command" class="prompt">{{ content.locale() === 'pt' ? 'visitante' : 'visitor' }}@portfolio:~$</label>
            <input id="terminal-command" [ngModel]="command()" (ngModelChange)="command.set($event)" name="terminal-command" autocomplete="off" autocapitalize="none" spellcheck="false" [attr.aria-label]="content.locale() === 'pt' ? 'Comando do terminal' : 'Terminal command'" [placeholder]="content.data().terminal.placeholder" />
            <span class="terminal-caret" aria-hidden="true"></span>
          </form>
        </div>
        <div class="terminal-panel__footer">{{ availableCommands() }}</div>
      </div>
    </section>
  `,
})
export class TerminalComponent {
  protected readonly command = signal('');
  protected readonly history = signal<readonly TerminalEntry[]>([]);
  protected readonly content = inject(PortfolioContentService);
  protected readonly availableCommands = computed(() => this.content.data().terminal.available);

  execute(event: SubmitEvent): void {
    event.preventDefault();
    const rawCommand = this.command().trim();
    const normalized = rawCommand.toLowerCase().replace(/\s+/g, ' ');
    if (!rawCommand) return;

    const commandAliases: Record<string, string> = {
      help: 'help', ajuda: 'help', about: 'about', sobre: 'about', skills: 'skills', habilidades: 'skills',
      projects: 'projects', projetos: 'projects', contact: 'contact', contato: 'contact', clear: 'clear', limpar: 'clear',
      'sudo hire-me': 'hire', 'sudo me-contrate': 'hire',
    };
    const parsedCommand = commandAliases[normalized] ?? normalized;

    if (parsedCommand === 'clear') {
      this.history.set([]);
      this.command.set('');
      return;
    }

    const nextEntries: TerminalEntry[] = [{ kind: 'command', text: rawCommand }];
    const response = this.responses()[parsedCommand];
    if (response) {
      nextEntries.push(response);
    } else {
      nextEntries.push({ kind: 'error', text: this.content.data().terminal.unknown.replace('{command}', rawCommand) });
    }

    this.history.update((current) => [...current, ...nextEntries]);
    this.command.set('');
  }

  private readonly responses = computed<Record<string, TerminalEntry>>(() => ({
    help: { kind: 'response', text: this.content.data().terminal.help },
    about: { kind: 'response', text: this.content.data().terminal.about },
    skills: { kind: 'response', text: this.content.data().terminal.skills },
    projects: { kind: 'response', text: this.content.data().terminal.projects },
    contact: { kind: 'response', text: this.content.data().terminal.contact },
    hire: { kind: 'success', text: this.content.data().terminal.success },
  }));
}
