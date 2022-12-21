import { createAction } from '@reduxjs/toolkit';

export const getGenres = createAction('autoSearch/getGenres');

export const getAuthors = createAction('autoSearch/getAuthors');

export const getSearchResult = createAction('autoSearch/getSearchResult');

export const getHierarchy = createAction('manualSearch/getHierarchy');

export const getDocument = createAction('document/getDocument');

export const addText = createAction<string>('document/addText');
