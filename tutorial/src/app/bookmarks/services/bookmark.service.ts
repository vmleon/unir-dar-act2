import { Injectable, signal, computed } from '@angular/core';
import { Bookmark } from '../models/bookmark.model';
import { INITIAL_BOOKMARKS } from '../data/initial-bookmarks';

@Injectable({ providedIn: 'root' })
export class BookmarkService {
  private bookmarks = signal<Bookmark[]>(INITIAL_BOOKMARKS);

  readonly all = this.bookmarks.asReadonly();
  readonly count = computed(() => this.bookmarks().length);

  add(bookmark: Omit<Bookmark, 'id' | 'createdAt'>) {
    const newBookmark: Bookmark = {
      ...bookmark,
      id: crypto.randomUUID(),
      createdAt: new Date()
    };
    this.bookmarks.update(list => [...list, newBookmark]);
  }

  remove(id: string) {
    this.bookmarks.update(list => list.filter(b => b.id !== id));
  }

  update(id: string, changes: Partial<Bookmark>) {
    this.bookmarks.update(list =>
      list.map(b => b.id === id ? { ...b, ...changes } : b)
    );
  }

  getById(id: string) {
    return this.bookmarks().find(b => b.id === id);
  }
}
