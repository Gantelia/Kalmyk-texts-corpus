import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { ServerCard } from '../../types/cards';
import { Hierarchy } from '../../types/hierarchy';
import { AppDispatch, State } from '../../types/state';
import { getHierarchy } from '../actions';

const adaptToClient = (hierarchy: any): Hierarchy => {
  if ('children' in hierarchy) {
    const { breadcrumbs, RenderType, children } = hierarchy;
    return {
      breadcrumb: breadcrumbs.map((breadcrumb: any) => ({
        id: breadcrumb.g_id,
        genre: breadcrumb.g_short_name
      })),
      renderType: RenderType,
      items: children.map((item: ServerCard) => ({
        id: item.g_id,
        title: item.g_short_name,
        picture: item.g_picture
      }))
    } as Hierarchy;
  }
  const { breadcrumbs, RenderType, table } = hierarchy;
  return {
    breadcrumb: breadcrumbs.map((breadcrumb: any) => ({
      id: breadcrumb.g_id,
      genre: breadcrumb.g_short_name
    })),
    renderType: RenderType,
    pages: table.pages,
    items: table.table.map((item: any) => ({
      id: item.text_id,
      author: item.author,
      title: item.text_title,
      year: item.pub_year
    }))
  };
};

export const fetchHierarchy = createAsyncThunk<
  void,
  string,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('hierarchy/fetchHierarchy', async (parameter, { dispatch, extra: api }) => {
  const { data } = await api.get(`${APIRoute.Hierarchy}${parameter}`);
  dispatch(getHierarchy(adaptToClient(data.response)));
});
