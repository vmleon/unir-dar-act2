import { Lesson } from './lesson.model';

export const DATA_BINDING_LESSON: Lesson = {
  id: 'data-binding',
  title: 'Data Binding',
  concept: 'Data Binding (4 tipos)',
  order: 4,
  explanation: `Angular tiene cuatro tipos de data binding que conectan la clase de tu component con el template:

1. Interpolation {{ value }}
   Muestra datos del component al template. Unidireccional: clase → template
   Nota: Los valores de signals se leen llamándolos: {{ bookmark().title }}

2. Property binding [property]="value"
   Establece propiedades del DOM o inputs de components. Unidireccional: clase → template

3. Event binding (event)="handler()"
   Escucha eventos del DOM o outputs de components. Unidireccional: template → clase

4. Two-way binding [(ngModel)]="value"
   Combina property + event binding. Bidireccional: clase ↔ template`,
  codeSnippet: `<!-- 1. Interpolation (signals are called as functions) -->
<h3>{{ bookmark().title }}</h3>

<!-- 2. Property binding -->
<a [href]="bookmark().url">Visit</a>
<app-card [bookmark]="selectedBookmark()" />

<!-- 3. Event binding -->
<button (click)="deleteBookmark(id)">Delete</button>
<app-card (deleted)="onDelete($event)" />

<!-- 4. Two-way binding (forms) -->
<input [(ngModel)]="searchText" />`,
  keyTakeaways: [
    '{{ }} interpolation muestra valores en templates',
    '[property] vincula datos HACIA elementos/components',
    '(event) vincula DESDE acciones del usuario hacia handlers',
    '[()] "banana in a box" = two-way binding',
    'Property binding para inputs, event binding para outputs'
  ]
};
