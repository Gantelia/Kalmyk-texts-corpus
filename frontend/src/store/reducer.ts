import { createReducer } from '@reduxjs/toolkit';
import { AUTHORS } from '../mocks/mocks';
import { Genre } from '../types/genre';
import { Document } from '../types/document';
import { Hierarchy } from '../types/hierarchy';
import { Table } from '../types/table';

import {
  showText,
  getAuthors,
  getDocument,
  getGenres,
  getHierarchy,
  getSearchResult,
  getServerMessage
} from './actions';

const initialState = {
  genres: [] as Genre[],
  authors: [] as string[],
  searchResult: <Table | null>null,
  hierarchy: <Hierarchy | null>null,
  breadcrumb: [] as Genre[],
  document: <null | Document>null,
  text: '',
  addTextMessage: ''
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
  });
  builder.addCase(getHierarchy, (state, action) => {
    state.hierarchy = action.payload;
    state.breadcrumb = action.payload.breadcrumb;
  });
  builder.addCase(getDocument, (state, action) => {
    state.document = action.payload.document;
    state.breadcrumb = action.payload.breadcrumb;
  });
  builder.addCase(showText, (state, action) => {
    state.text = action.payload;
  });
  builder.addCase(getServerMessage, (state, action) => {
    state.addTextMessage = action.payload;
  });
});

export { reducer };
