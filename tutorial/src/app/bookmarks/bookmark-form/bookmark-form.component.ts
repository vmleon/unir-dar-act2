import { Component, inject, output } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { BookmarkService } from '../services/bookmark.service';
import { TutorialService } from '../../tutorial/tutorial.service';

@Component({
  selector: 'app-bookmark-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './bookmark-form.component.html',
  styleUrl: './bookmark-form.component.css'
})
export class BookmarkFormComponent {
  private fb = inject(FormBuilder);
  private bookmarkService = inject(BookmarkService);
  private tutorial = inject(TutorialService);

  saved = output<void>();

  form = this.fb.group({
    title: ['', Validators.required],
    url: ['', [Validators.required, Validators.pattern(/^https?:\/\/.+/)]],
    description: [''],
    tags: ['']
  });

  revealForms() {
    this.tutorial.show('reactive-forms');
  }

  onSubmit() {
    if (this.form.valid) {
      const { title, url, description, tags } = this.form.value;
      this.bookmarkService.add({
        title: title!,
        url: url!,
        description: description || undefined,
        tags: tags ? tags.split(',').map(t => t.trim()).filter(t => t) : undefined
      });
      this.form.reset();
      this.saved.emit();
    }
  }
}
