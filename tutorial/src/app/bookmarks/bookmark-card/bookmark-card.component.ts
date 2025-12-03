import { Component, inject, input, output } from '@angular/core';
import { Bookmark } from '../models/bookmark.model';
import { TutorialService } from '../../tutorial/tutorial.service';

@Component({
  selector: 'app-bookmark-card',
  standalone: true,
  templateUrl: './bookmark-card.component.html',
  styleUrl: './bookmark-card.component.css'
})
export class BookmarkCardComponent {
  private tutorial = inject(TutorialService);

  bookmark = input.required<Bookmark>();
  deleted = output<string>();

  revealLesson(event: Event) {
    event.stopPropagation();
    this.tutorial.show('bookmark-card');
  }

  revealCommunication(event: Event) {
    event.stopPropagation();
    this.tutorial.show('component-communication');
  }

  revealDataBinding(event: Event) {
    event.stopPropagation();
    this.tutorial.show('data-binding');
  }

  onDelete(event: Event) {
    event.stopPropagation();
    if (confirm(`Delete "${this.bookmark().title}"?`)) {
      this.deleted.emit(this.bookmark().id);
    }
  }
}
