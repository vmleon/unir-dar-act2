import { Bookmark } from '../models/bookmark.model';

export const INITIAL_BOOKMARKS: Bookmark[] = [
  {
    id: '1',
    title: 'Angular Documentation',
    url: 'https://angular.dev',
    description: 'Documentación oficial de Angular',
    tags: ['angular', 'docs'],
    createdAt: new Date('2024-01-15')
  },
  {
    id: '2',
    title: 'TypeScript Handbook',
    url: 'https://www.typescriptlang.org/docs/',
    description: 'Aprende los fundamentos de TypeScript',
    tags: ['typescript', 'docs'],
    createdAt: new Date('2024-01-20')
  },
  {
    id: '3',
    title: 'MDN Web Docs',
    url: 'https://developer.mozilla.org',
    description: 'Referencia de desarrollo web',
    tags: ['web', 'reference'],
    createdAt: new Date('2024-02-01')
  }
];
