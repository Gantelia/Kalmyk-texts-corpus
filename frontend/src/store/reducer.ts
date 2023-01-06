import { createReducer } from '@reduxjs/toolkit';
import { InitialState } from '../types/state';
import {
  showText,
  getAuthors,
  getDocument,
  getGenres,
  getHierarchy,
  getSearchResult,
  getServerMessage,
  setError,
  setSearchParams,
  setHierarchyParams
} from './actions';

const initialState: InitialState = {
  genres: [],
  authors: [],
  searchResult: null,
  hierarchy: null,
  breadcrumb: [],
  document: null,
  text: '',
  addTextMessage: '',
  error: '',
  searchParams: null,
  hierarchyParams: null
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
  builder.addCase(setSearchParams, (state, action) => {
    state.searchParams = action.payload;
  });
  builder.addCase(setHierarchyParams, (state, action) => {
    state.hierarchyParams = action.payload;
  });
});

export { reducer };
