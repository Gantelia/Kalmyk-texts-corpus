import { createReducer } from '@reduxjs/toolkit';
import { GENRES } from '../mocks/mocks';
import { Genre } from '../types/genre';
import { getGenres } from './actions';

const initialState = {
  genres: [] as Genre[]
};

const reducer = createReducer(initialState, (builder) => {
  builder.addCase(getGenres, (state) => {
    state.genres = GENRES;
  });
});

export { reducer };
