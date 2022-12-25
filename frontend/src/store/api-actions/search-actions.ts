import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { api, store } from '..';
import { APIRoute } from '../../const';
import { Genre, SearchMenu } from '../../types/genre';
import { AppDispatch, State } from '../../types/state';
import { Table } from '../../types/table';
import { getAuthors, getGenres, getSearchResult } from '../actions';

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

const adaptResultToClient = (result: any): Table => {
  const { pages, RenderType, table } = result;
  return {
    renderType: RenderType,
    pages: pages,
    items: table.length
      ? table.map((item: any) => ({
          id: item.text_id,
          author: item.author,
          title: item.text_title,
          year: item.pub_year
        }))
      : []
  };
};

export const fetchSearchResult = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('search/fetchSearchResult', async (parameter) => {
  const { data } = await api.get(`${APIRoute.Search}${parameter}`);
  const adaptedData = adaptResultToClient(data.response);
  store.dispatch(getSearchResult(adaptedData));
});
