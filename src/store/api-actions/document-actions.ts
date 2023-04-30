import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { AppDispatch, State } from '../../types/state';
import { UserText } from '../../types/document';
import { adaptDocumentToClient } from './utils';
import { errorHandle } from '../../services/error-handle';
import {
  getAddTextMessage,
  getDocumentAndBreadcrumb
} from '../document-slice/document-slice';

export const fetchDocumentAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('document/fetchDocument', async (id, { dispatch, extra: api }) => {
  try {
    const { data } = await api.get(`${APIRoute.Document}${id}`);
    const adaptedData = adaptDocumentToClient(data.response);
    dispatch(getDocumentAndBreadcrumb(adaptedData));
  } catch (error) {
    errorHandle(error);
  }
});

export const loadTextAction = createAsyncThunk<
  void,
  UserText,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('document/loadText', async (text, { dispatch, extra: api }) => {
  try {
    const { data } = await api.post(APIRoute.AddText, text);
    dispatch(getAddTextMessage(data.message));
  } catch (error) {
    errorHandle(error);
  }
});
