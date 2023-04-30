import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { BreadcrumbState } from '../../types/state';
import { getDocumentAndBreadcrumb } from '../document-slice/document-slice';
import { getHierarchyAndBreadcrumb } from '../genre-structure-slice/genre-structure-slice';

const initialState: BreadcrumbState = {
  breadcrumb: []
};

export const breadcrumbSlice = createSlice({
  name: NameSpace.breadcrumb,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getDocumentAndBreadcrumb, (state, action) => {
        state.breadcrumb = action.payload.breadcrumb;
      })
      .addCase(getHierarchyAndBreadcrumb, (state, action) => {
        state.breadcrumb = action.payload.breadcrumb;
      });
  }
});
