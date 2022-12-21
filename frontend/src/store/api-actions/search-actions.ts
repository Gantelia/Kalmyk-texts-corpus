import { createAsyncThunk } from '@reduxjs/toolkit';
import { api, store } from '..';
import { APIRoute } from '../../const';
import { Genre, SearchMenu } from '../../types/genre';
import { getAuthors, getGenres } from '../actions';

const adaptMenuToClient = (
  menu: SearchMenu
): { genres: Genre[]; authors: string[] } => {
  const { genres, authors } = menu.response;
  return {
    genres: genres.map((item) => ({ id: item.g_id, genre: item.g_short_name })),
    authors: authors
  };
};

export const fetchSearchMenu = createAsyncThunk(
  'search/fetchSearchMenu',
  async () => {
    const { data } = await api.get<SearchMenu>(APIRoute.SearchMenu);
    const adaptedMenu = adaptMenuToClient(data);
    store.dispatch(getGenres(adaptedMenu.genres));
    store.dispatch(getAuthors(adaptedMenu.authors));
  }
);
