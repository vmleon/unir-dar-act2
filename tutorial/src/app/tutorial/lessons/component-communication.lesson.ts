import { Lesson } from './lesson.model';

export const COMPONENT_COMMUNICATION_LESSON: Lesson = {
  id: 'component-communication',
  title: 'Component Communication',
  concept: 'Inputs & Outputs',
  order: 5,
  explanation: `Los components se comunican entre sí a través de inputs y outputs:

• input() - Recibe datos DESDE el component padre
• output() - Envía eventos HACIA el component padre

Piénsalo así:
- Los inputs son cómo un padre "le habla a" un hijo
- Los outputs son cómo un hijo "responde" a su padre

En Angular 17+, usamos inputs basados en signals con las funciones input() y output() en lugar de los decorators antiguos @Input() y @Output().`,
  codeSnippet: `// Child component
@Component({ selector: 'app-bookmark-card' })
export class BookmarkCardComponent {
  // Receive data from parent
  bookmark = input.required<Bookmark>();

  // Send events to parent
  deleted = output<string>();

  onDelete() {
    this.deleted.emit(this.bookmark().id);
  }
}

// Parent template
<app-bookmark-card
  [bookmark]="myBookmark"
  (deleted)="handleDelete($event)"
/>`,
  keyTakeaways: [
    'input() recibe datos de components padre',
    'output() emite eventos hacia components padre',
    'input.required() hace que los inputs sean obligatorios',
    'Los datos fluyen HACIA ABAJO vía inputs',
    'Los eventos fluyen HACIA ARRIBA vía outputs'
  ]
};
