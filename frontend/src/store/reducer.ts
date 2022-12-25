import { createReducer } from '@reduxjs/toolkit';
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
  getServerMessage,
  setError
} from './actions';

type InitialState = {
  genres: Genre[];
  authors: string[];
  searchResult: Table | null;
  hierarchy: Hierarchy | null;
  breadcrumb: Genre[];
  document: Document | null;
  text: string;
  addTextMessage: string;
  error: string;
};

const initialState: InitialState = {
  genres: [],
  authors: [],
  searchResult: null,
  hierarchy: null,
  breadcrumb: [],
  document: null,
  text: '',
  addTextMessage: '',
  error: ''
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getGenres, (state, action) => {
    state.genres = action.payload;
  });
  builder.addCase(getAuthors, (state, action) => {
    state.authors = action.payload;
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
  builder.addCase(setError, (state, action) => {
    state.error = action.payload;
  });
});

export { reducer };
