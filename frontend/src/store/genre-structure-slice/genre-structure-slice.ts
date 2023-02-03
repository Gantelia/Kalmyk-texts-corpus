import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { GenreStructureState } from '../../types/state';

const initialState: GenreStructureState = {
  hierarchy: null,
  hierarchyParams: null
};

export const genreStructureSlice = createSlice({
  name: NameSpace.genreStructure,
  initialState,
  reducers: {
    getHierarchyAndBreadcrumb: (state, action) => {
      state.hierarchy = action.payload;
    },
    setHierarchyParams: (state, action) => {
      state.hierarchyParams = action.payload;
    }
  }
});

export const { getHierarchyAndBreadcrumb, setHierarchyParams } =
  genreStructureSlice.actions;
