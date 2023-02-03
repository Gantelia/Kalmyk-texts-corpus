import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { api, store } from '..';
import { APIRoute } from '../../const';
import { errorHandle } from '../../services/error-handle';
import { SearchMenu } from '../../types/genre';
import { SearchParams } from '../../types/search';
import { AppDispatch, State } from '../../types/state';
import {
  getAuthors,
  getGenres,
  getSearchResult,
  setSearchParams
} from '../search-slice/search-slice';

import {
  adaptMenuToClient,
  adaptResultToClient,
  turnSearchParamsIntoString
} from './utils';

export const fetchSearchMenuAction = createAsyncThunk(
  'search/fetchSearchMenu',
  async () => {
    try {
      const { data } = await api.get<SearchMenu>(APIRoute.SearchMenu);
      const adaptedMenu = adaptMenuToClient(data);
      store.dispatch(getGenres(adaptedMenu.genres));
      store.dispatch(getAuthors(adaptedMenu.authors));
    } catch (error) {
      errorHandle(error);
    }
  }
);

export const fetchSearchResultAction = createAsyncThunk<
  void,
  SearchParams,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('search/fetchSearchResult', async (params) => {
  const requestParams = turnSearchParamsIntoString(params);
  try {
    const { data } = await api.get(`${APIRoute.Search}${requestParams}`);
    const adaptedData = adaptResultToClient(data.response);
    store.dispatch(getSearchResult(adaptedData));
    store.dispatch(setSearchParams(params));
  } catch (error) {
    errorHandle(error);
  }
});
