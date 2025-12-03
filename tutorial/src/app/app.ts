import { Component, inject } from '@angular/core';
import { TutorialPanelComponent } from './tutorial/tutorial-panel/tutorial-panel.component';
import { BookmarkListComponent } from './bookmarks/bookmark-list/bookmark-list.component';
import { TutorialService } from './tutorial/tutorial.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TutorialPanelComponent, BookmarkListComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  private tutorial = inject(TutorialService);

  goToWelcome() {
    this.tutorial.clear();
  }
}
