import { createAsyncThunk } from '@reduxjs/toolkit';
import { AxiosInstance } from 'axios';
import { APIRoute } from '../../const';
import { errorHandle } from '../../services/error-handle';
import { HierarchyParams } from '../../types/hierarchy';
import { AppDispatch, State } from '../../types/state';
import { getHierarchy, setHierarchyParams } from '../actions';
import { adaptHierarchyToClient, turnHierarchyParamsIntoString } from './utils';

export const fetchHierarchyAction = createAsyncThunk<
  void,
  HierarchyParams,
  {
    dispatch: AppDispatch;
    state: State;
    extra: AxiosInstance;
  }
>('hierarchy/fetchHierarchy', async (params, { dispatch, extra: api }) => {
  const hierarchyParams = turnHierarchyParamsIntoString(params);
  try {
    const { data } = await api.get(`${APIRoute.Hierarchy}${hierarchyParams}`);
    dispatch(getHierarchy(adaptHierarchyToClient(data.response)));
    dispatch(setHierarchyParams(params));
  } catch (error) {
    errorHandle(error);
  }
});
