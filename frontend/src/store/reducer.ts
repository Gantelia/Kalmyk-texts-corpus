import { createReducer } from '@reduxjs/toolkit';
import { AUTHORS } from '../mocks/mocks';
import { Genre } from '../types/genre';
import { Document } from '../types/document';
import { Hierarchy } from '../types/hierarchy';
import { Table } from '../types/table';

import {
  addText,
  getAuthors,
  getDocument,
  getGenres,
  getHierarchy,
  getSearchResult
} from './actions';

const initialState = {
  genres: [] as Genre[],
  authors: [] as string[],
  searchResult: {} as Table,
  hierarchy: {} as Hierarchy,
  breadcrumb: [] as Genre[],
  isMessage: false,
  document: <null | Document>null,
  text: ''
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getGenres, (state, action) => {
    state.genres = action.payload;
  });
  builder.addCase(getAuthors, (state) => {
    state.authors = AUTHORS;
  });
  builder.addCase(getSearchResult, (state, action) => {
    state.searchResult = action.payload;
    state.isMessage = true;
  });
  builder.addCase(getHierarchy, (state, action) => {
    state.hierarchy = action.payload;
    state.breadcrumb = action.payload.breadcrumb;
    state.isMessage = state.breadcrumb.length === 1 ? false : true;
  });
  builder.addCase(getDocument, (state, action) => {
    state.document = action.payload.document;
    state.breadcrumb = action.payload.breadcrumb;
  });
  builder.addCase(addText, (state, action) => {
    state.text = action.payload;
  });
});

export { reducer };
