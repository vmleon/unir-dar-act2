import { Lesson } from './lesson.model';

export const SIGNALS_LESSON: Lesson = {
  id: 'signals',
  title: 'Signals & Reactivity',
  concept: 'Signals (Modern State)',
  order: 3,
  explanation: `Los Signals son el enfoque moderno de Angular para la gestión reactiva del estado.

• signal() - Crea un signal escribible con un valor inicial
• computed() - Crea un signal derivado que se actualiza automáticamente cuando cambian sus dependencias
• effect() - Ejecuta efectos secundarios cuando los signals cambian

Los signals se leen llamándolos como funciones: count() no count. Esta lectura explícita hace que la detección de cambios sea más eficiente.

¡El input de filtro de abajo demuestra los signals en acción - escribe para ver el filtrado instantáneo!`,
  codeSnippet: `// Create a signal
private bookmarks = signal<Bookmark[]>([]);

// Read-only exposure
readonly all = this.bookmarks.asReadonly();

// Derived state (auto-updates!)
readonly count = computed(() => this.bookmarks().length);

// Filter with signals
filterText = signal('');
filtered = computed(() => {
  const text = this.filterText().toLowerCase();
  return this.all().filter(b =>
    b.title.toLowerCase().includes(text)
  );
});

// Update signal
this.bookmarks.update(list => [...list, newBookmark]);`,
  keyTakeaways: [
    'signal() crea estado reactivo',
    'computed() deriva valores automáticamente',
    'Lee los signals llamándolos: signal()',
    'update() modifica el signal basándose en el valor actual',
    'Mucho más simple que RxJS para el estado de components'
  ]
};
