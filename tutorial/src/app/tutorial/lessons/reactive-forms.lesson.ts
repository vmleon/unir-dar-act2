import { Lesson } from './lesson.model';

export const REACTIVE_FORMS_LESSON: Lesson = {
  id: 'reactive-forms',
  title: 'BookmarkFormComponent',
  concept: 'Reactive Forms',
  order: 6,
  explanation: `Los Reactive Forms son una manera de manejar inputs de formularios basado en el modelo de datos. La estructura del formulario se define en TypeScript, dándote control total.

Conceptos clave:
• FormGroup - Un grupo de controles de formulario
• FormControl - Un campo de input individual
• Validators - Reglas de validación integradas y personalizadas

Ventajas sobre los formularios template-driven:
- Más fáciles de testear (lógica del formulario en TypeScript)
- Mejor para formularios complejos
- Acceso síncrono al estado del formulario`,
  codeSnippet: `// Component
export class BookmarkFormComponent {
  private fb = inject(FormBuilder);

  form = this.fb.group({
    title: ['', Validators.required],
    url: ['', [Validators.required, Validators.pattern(/^https?:\\/\\/.+/)]],
    description: ['']
  });

  onSubmit() {
    if (this.form.valid) {
      const bookmark = this.form.value;
      // save bookmark...
      this.form.reset();
    }
  }
}

// Template
<form [formGroup]="form" (ngSubmit)="onSubmit()">
  <input formControlName="title" />
  @if (form.controls.title.errors?.['required']) {
    <span class="error">Title is required</span>
  }
  <button [disabled]="form.invalid">Save</button>
</form>`,
  keyTakeaways: [
    'FormGroup agrupa múltiples FormControls',
    'formControlName conecta inputs a controles',
    'Validators proporcionan validación integrada',
    'form.valid / form.invalid verifican el estado general',
    'Accede a errores vía control.errors'
  ]
};
