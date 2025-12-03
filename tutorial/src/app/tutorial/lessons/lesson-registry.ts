import { Lesson } from './lesson.model';
import { BOOKMARK_CARD_LESSON } from './bookmark-card.lesson';
import { CONTROL_FLOW_LESSON } from './control-flow.lesson';
import { SIGNALS_LESSON } from './signals.lesson';
import { DATA_BINDING_LESSON } from './data-binding.lesson';
import { COMPONENT_COMMUNICATION_LESSON } from './component-communication.lesson';
import { REACTIVE_FORMS_LESSON } from './reactive-forms.lesson';
import { SERVICES_DI_LESSON } from './services-di.lesson';

const ALL_LESSONS: Lesson[] = [
  BOOKMARK_CARD_LESSON,
  CONTROL_FLOW_LESSON,
  SIGNALS_LESSON,
  DATA_BINDING_LESSON,
  COMPONENT_COMMUNICATION_LESSON,
  REACTIVE_FORMS_LESSON,
  SERVICES_DI_LESSON,
];

export const LESSON_REGISTRY: Record<string, Lesson> = ALL_LESSONS.reduce(
  (acc, lesson) => ({ ...acc, [lesson.id]: lesson }),
  {}
);

export const LESSONS_BY_ORDER: Lesson[] = ALL_LESSONS.sort((a, b) => a.order - b.order);
