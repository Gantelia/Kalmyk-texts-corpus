import { createAction } from '@reduxjs/toolkit';
import { Genre } from '../types/genre';

export const getGenres = createAction<Genre[]>('autoSearch/getGenres');

export const getAuthors = createAction<string[]>('autoSearch/getAuthors');

export const getSearchResult = createAction('autoSearch/getSearchResult');

export const getHierarchy = createAction('manualSearch/getHierarchy');

export const getDocument = createAction('document/getDocument');

export const addText = createAction<string>('document/addText');
