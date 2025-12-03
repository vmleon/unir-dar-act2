import { Component, computed, inject } from '@angular/core';
import { TutorialService } from '../tutorial.service';
import { LESSON_REGISTRY, LESSONS_BY_ORDER } from '../lessons/lesson-registry';
import { CodeHighlightComponent } from '../code-highlight/code-highlight.component';

@Component({
  selector: 'app-tutorial-panel',
  standalone: true,
  imports: [CodeHighlightComponent],
  templateUrl: './tutorial-panel.component.html',
  styleUrl: './tutorial-panel.component.css'
})
export class TutorialPanelComponent {
  private tutorial = inject(TutorialService);

  activeLessonId = this.tutorial.activeLesson;

  activeLesson = computed(() => {
    const id = this.activeLessonId();
    return id ? LESSON_REGISTRY[id] : null;
  });

  allLessons = LESSONS_BY_ORDER;
  totalLessons = LESSONS_BY_ORDER.length;
  viewedCount = this.tutorial.viewedCount;

  progressPercent = computed(() =>
    Math.round((this.viewedCount() / this.totalLessons) * 100)
  );

  selectLesson(lessonId: string) {
    this.tutorial.show(lessonId);
  }

  isViewed(lessonId: string): boolean {
    return this.tutorial.isViewed(lessonId);
  }
}
