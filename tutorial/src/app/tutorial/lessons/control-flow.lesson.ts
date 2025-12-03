import { Lesson } from './lesson.model';

export const CONTROL_FLOW_LESSON: Lesson = {
  id: 'control-flow',
  title: 'BookmarkListComponent',
  concept: 'Control Flow (@for, @if, @empty)',
  order: 2,
  explanation: `La nueva sintaxis de control flow de Angular reemplaza las directivas estructurales (*ngIf, *ngFor) con una sintaxis más limpia.

• @for - Itera sobre arrays/iterables. Requiere una expresión "track" para el rendimiento.
• @if / @else - Renderizado condicional
• @empty - Muestra contenido alternativo cuando @for no tiene elementos

La expresión track le indica a Angular cómo identificar cada elemento. Usar un ID único (como bookmark.id) ayuda a Angular a actualizar eficientemente solo los elementos que cambiaron en lugar de re-renderizar toda la lista.`,
  codeSnippet: `@for (bookmark of bookmarks(); track bookmark.id) {
  <app-bookmark-card [bookmark]="bookmark" />
} @empty {
  <p>No bookmarks yet!</p>
}

@if (count() > 0) {
  <span>{{ count() }} bookmarks</span>
} @else {
  <span>Add your first bookmark</span>
}`,
  keyTakeaways: [
    '@for reemplaza *ngFor con una sintaxis más limpia',
    'track es obligatorio y mejora el rendimiento',
    '@empty proporciona contenido alternativo para arrays vacíos',
    '@if/@else reemplaza *ngIf'
  ]
};
