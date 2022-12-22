import { createAction } from '@reduxjs/toolkit';
import { DocumentData } from '../types/document';
import { Genre } from '../types/genre';
import { Hierarchy } from '../types/hierarchy';
import { Table } from '../types/table';

export const getGenres = createAction<Genre[]>('search/getGenres');

export const getAuthors = createAction<string[]>('search/getAuthors');

export const getSearchResult = createAction<Table>('search/getSearchResult');

export const getHierarchy = createAction<Hierarchy>(
  'genreStructure/getHierarchy'
);

export const getDocument = createAction<DocumentData>('document/getDocument');

export const addText = createAction<string>('document/addText');
