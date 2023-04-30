import { store } from '../store';
import { Genre } from './genre';
import { Hierarchy, HierarchyParams } from './hierarchy';
import { SearchParams } from './search';
import { Table } from './table';
import { Document } from './document';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type SearchState = {
  genres: Genre[];
  authors: string[];
  searchResult: Table | null;
  searchParams: SearchParams | null;
};

export type GenreStructureState = {
  hierarchy: Hierarchy | null;
  hierarchyParams: HierarchyParams | null;
};

export type DocumentState = {
  document: Document | null;
  text: string;
  addTextMessage: string;
};

export type BreadcrumbState = {
  breadcrumb: Genre[];
};
