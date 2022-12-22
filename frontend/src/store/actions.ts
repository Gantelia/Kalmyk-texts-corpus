import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../types/genre';
import { Hierarchy } from '../types/hierarchy';

export const getGenres = createAction<Genre[]>('autoSearch/getGenres');

export const getAuthors = createAction<string[]>('autoSearch/getAuthors');

export const getSearchResult = createAction('autoSearch/getSearchResult');

export const getHierarchy = createAction<Hierarchy>(
  'genreStructure/getHierarchy'
);

export const getDocument = createAction('document/getDocument');

export const addText = createAction<string>('document/addText');
