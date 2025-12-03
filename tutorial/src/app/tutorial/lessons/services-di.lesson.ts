import { Lesson } from './lesson.model';

export const SERVICES_DI_LESSON: Lesson = {
  id: 'services-di',
  title: 'BookmarkService',
  concept: 'Services & Dependency Injection',
  order: 7,
  explanation: `Los Services son clases que manejan la lógica de negocio, gestión de datos y funcionalidad compartida. Dependency Injection (DI) es cómo Angular proporciona estos services a los components.

Conceptos clave:
• @Injectable() - Marca una clase como inyectable
• providedIn: 'root' - Hace que el service esté disponible en toda la aplicación (singleton)
• inject() - Obtiene una instancia del service en un component

Los services mantienen a los components "ligeros" - los components manejan la UI, los services manejan la lógica y los datos.`,
  codeSnippet: `// Service definition
@Injectable({ providedIn: 'root' })
export class BookmarkService {
  private bookmarks = signal<Bookmark[]>([]);

  readonly all = this.bookmarks.asReadonly();

  add(bookmark: Omit<Bookmark, 'id' | 'createdAt'>) {
    const newBookmark = {
      ...bookmark,
      id: crypto.randomUUID(),
      createdAt: new Date()
    };
    this.bookmarks.update(list => [...list, newBookmark]);
  }

  remove(id: string) {
    this.bookmarks.update(list => list.filter(b => b.id !== id));
  }
}

// Using in a component
export class BookmarkListComponent {
  private bookmarkService = inject(BookmarkService);
  bookmarks = this.bookmarkService.all;
}`,
  keyTakeaways: [
    '@Injectable marca clases para DI',
    'providedIn: root = service singleton',
    'inject() obtiene instancias de services',
    'Los services manejan datos y lógica de negocio',
    'Los components se enfocan en la UI'
  ]
};
