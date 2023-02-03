import { combineReducers } from '@reduxjs/toolkit';
import { NameSpace } from '../const';
import { breadcrumbSlice } from './breadcrumb-slice/breadcrumb-slice';
import { documentSlice } from './document-slice/document-slice';
import { genreStructureSlice } from './genre-structure-slice/genre-structure-slice';
import { searchSlice } from './search-slice/search-slice';

export const rootReducer = combineReducers({
  [NameSpace.search]: searchSlice.reducer,
  [NameSpace.genreStructure]: genreStructureSlice.reducer,
  [NameSpace.document]: documentSlice.reducer,
  [NameSpace.breadcrumb]: breadcrumbSlice.reducer
});
