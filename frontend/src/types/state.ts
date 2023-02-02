import { store } from '../store';
import { Genre } from './genre';
import { Hierarchy, HierarchyParams } from './hierarchy';
import { SearchParams } from './search';
import { Table } from './table';
import { Document } from './document';

export type State = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export type InitialState = {
  genres: Genre[];
  authors: string[];
  searchResult: Table | null;
  hierarchy: Hierarchy | null;
  breadcrumb: Genre[];
  document: Document | null;
  text: string;
  addTextMessage: string;
  error: string;
  searchParams: SearchParams | null;
  hierarchyParams: HierarchyParams | null;
};

export type SearchState = {
  genres: Genre[];
  authors: string[];
  searchResult: Table | null;
  searchParams: SearchParams | null;
};
