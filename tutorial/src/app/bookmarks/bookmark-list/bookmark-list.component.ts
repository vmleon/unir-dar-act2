import { Component, inject, signal, computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BookmarkService } from '../services/bookmark.service';
import { BookmarkCardComponent } from '../bookmark-card/bookmark-card.component';
import { BookmarkFormComponent } from '../bookmark-form/bookmark-form.component';
import { TutorialService } from '../../tutorial/tutorial.service';

@Component({
  selector: 'app-bookmark-list',
  standalone: true,
  imports: [BookmarkCardComponent, BookmarkFormComponent, FormsModule],
  templateUrl: './bookmark-list.component.html',
  styleUrl: './bookmark-list.component.css'
})
export class BookmarkListComponent {
  private bookmarkService = inject(BookmarkService);
  private tutorial = inject(TutorialService);

  filterText = signal('');

  bookmarks = computed(() => {
    const text = this.filterText().toLowerCase();
    const all = this.bookmarkService.all();
    if (!text) return all;
    return all.filter(b =>
      b.title.toLowerCase().includes(text) ||
      b.url.toLowerCase().includes(text) ||
      b.description?.toLowerCase().includes(text)
    );
  });

  count = computed(() => this.bookmarks().length);
  totalCount = this.bookmarkService.count;

  showAddForm = signal(false);

  onFilterChange(value: string) {
    this.filterText.set(value);
  }

  revealControlFlow() {
    this.tutorial.show('control-flow');
  }

  revealSignals() {
    this.tutorial.show('signals');
  }

  revealServicesDI() {
    this.tutorial.show('services-di');
  }

  toggleAddForm() {
    this.showAddForm.update(v => !v);
  }

  onBookmarkAdded() {
    this.showAddForm.set(false);
  }

  deleteBookmark(id: string) {
    this.bookmarkService.remove(id);
  }
}
