import { Component, input, effect, ElementRef, viewChild } from '@angular/core';
import Prism from 'prismjs';
import 'prismjs/components/prism-typescript';

@Component({
  selector: 'app-code-highlight',
  standalone: true,
  template: `<pre class="code-block"><code #codeEl [class]="'language-' + language()">{{ code() }}</code></pre>`,
  styles: [`
    :host { display: block; }
    .code-block {
      margin: 0;
      border-radius: 8px;
      font-size: 0.8rem;
    }
  `]
})
export class CodeHighlightComponent {
  code = input.required<string>();
  language = input<string>('typescript');

  private codeEl = viewChild<ElementRef<HTMLElement>>('codeEl');

  constructor() {
    effect(() => {
      const el = this.codeEl();
      if (el) {
        this.code(); // trigger on code change
        Prism.highlightElement(el.nativeElement);
      }
    });
  }
}
