import { Lesson } from './lesson.model';

export const BOOKMARK_CARD_LESSON: Lesson = {
  id: 'bookmark-card',
  title: 'BookmarkCardComponent',
  concept: 'Components & Templates',
  order: 1,
  explanation: `Un component es el bloque de construcción básico de las aplicaciones Angular.

Cada component combina:
• Una clase TypeScript (lógica y datos)
• Un template HTML (lo que ven los usuarios)
• Estilos CSS opcionales (cómo se ve)

El decorator @Component le indica a Angular que esta clase es un component y configura su selector, template y estilos.

Observa la función input.required<Bookmark>() - esta es la forma moderna de Angular basada en signals para recibir datos de components padre.`,
  codeSnippet: `@Component({
  selector: 'app-bookmark-card',
  standalone: true,
  template: \`
    <article class="card">
      <h3>{{ bookmark().title }}</h3>
      <a [href]="bookmark().url">
        {{ bookmark().url }}
      </a>
    </article>
  \`
})
export class BookmarkCardComponent {
  bookmark = input.required<Bookmark>();
}`,
  keyTakeaways: [
    'Los components encapsulan UI + comportamiento juntos',
    'El decorator @Component marca una clase como component',
    'selector define la etiqueta HTML (<app-bookmark-card>)',
    'input() define datos recibidos de components padre',
    '{{ }} interpolation muestra datos en templates'
  ]
};
