import { Injectable, signal, computed } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TutorialService {
  activeLesson = signal<string | null>(null);

  // Track which lessons have been viewed
  private viewedLessons = signal<Set<string>>(new Set());

  viewedCount = computed(() => this.viewedLessons().size);

  show(lessonId: string) {
    this.activeLesson.set(lessonId);
    // Mark as viewed
    this.viewedLessons.update(set => {
      const newSet = new Set(set);
      newSet.add(lessonId);
      return newSet;
    });
  }

  clear() {
    this.activeLesson.set(null);
  }

  isViewed(lessonId: string): boolean {
    return this.viewedLessons().has(lessonId);
  }
}
