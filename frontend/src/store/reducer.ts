import { createReducer } from '@reduxjs/toolkit';
import { AUTHORS, LiteratureTable, document } from '../mocks/mocks';
import { Genre } from '../types/genre';
import { Hierarchy } from '../types/hierarchy';

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
  searchResult: LiteratureTable,
  hierarchy: {} as Hierarchy,
  document,
  text: ''
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getGenres, (state, action) => {
    state.genres = action.payload;
  });
  builder.addCase(getAuthors, (state) => {
    state.authors = AUTHORS;
  });
  builder.addCase(getSearchResult, (state) => {
    state.searchResult = LiteratureTable;
  });
  builder.addCase(getHierarchy, (state, action) => {
    state.hierarchy = action.payload;
  });
  builder.addCase(getDocument, (state) => {
    state.document = document;
  });
  builder.addCase(addText, (state, action) => {
    state.text = action.payload;
  });
});

export { reducer };
