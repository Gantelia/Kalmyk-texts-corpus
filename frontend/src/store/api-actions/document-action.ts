import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { AppDispatch, State } from '../../types/state';
import { DocumentData } from '../../types/document';
import { adaptBreadcrumb } from '../utils';
import { getDocument } from '../actions';

const adaptToClient = (documentData: any) => {
  const { breadcrumbs, document } = documentData;
  return {
    breadcrumb: adaptBreadcrumb(breadcrumbs),
    document: {
      id: document.text_id,
      title: document.text_title,
      author: document.author,
      year: document.pub_year,
      body: document.text_body
    }
  } as DocumentData;
};

export const fetchDocumentAction = createAsyncThunk<
  void,
  number,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('hierarchy/fetchDocumentAction', async (id, { dispatch, extra: api }) => {
  console.log('fetch', id);

  const { data } = await api.get(`${APIRoute.Document}/${id}`);
  const adaptedData = adaptToClient(data.response);
  dispatch(getDocument(adaptedData));
});
