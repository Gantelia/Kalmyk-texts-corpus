import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { SearchState } from '../../types/state';

const initialState: SearchState = {
  genres: [],
  authors: [],
  searchResult: null,
  searchParams: null
};

export const searchSlice = createSlice({
  name: NameSpace.search,
  initialState,
  reducers: {
    getGenres: (state, action) => {
      state.genres = action.payload;
    },
    getAuthors: (state, action) => {
      state.authors = action.payload;
    },
    getSearchResult: (state, action) => {
      state.searchResult = action.payload;
    },
    setSearchParams: (state, action) => {
      state.searchParams = action.payload;
    }
  }
});

export const { getGenres, getAuthors, getSearchResult, setSearchParams } =
  searchSlice.actions;
