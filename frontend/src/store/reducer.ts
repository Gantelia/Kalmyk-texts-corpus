import { createReducer } from '@reduxjs/toolkit';
import {
  AUTHORS,
  BREADCRUMB,
  GENRES,
  LiteratureCards,
  LiteratureTable,
  document
} from '../mocks/mocks';

import {
  addText,
  getAuthors,
  getDocument,
  getGenres,
  getHierarchy,
  getSearchResult
} from './actions';

const initialState = {
  genres: GENRES,
  authors: AUTHORS,
  searchResult: LiteratureTable,
  hierarchy: LiteratureCards,
  breadcrumb: BREADCRUMB,
  document,
  text: ''
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getGenres, (state) => {
    state.genres = GENRES;
  });
  builder.addCase(getAuthors, (state) => {
    state.authors = AUTHORS;
  });
  builder.addCase(getSearchResult, (state) => {
    state.searchResult = LiteratureTable;
  });
  builder.addCase(getHierarchy, (state) => {
    state.hierarchy = LiteratureCards;
  });
  builder.addCase(getDocument, (state) => {
    state.document = document;
  });
  builder.addCase(addText, (state, action) => {
    state.text = action.payload;
  });
});

export { reducer };
