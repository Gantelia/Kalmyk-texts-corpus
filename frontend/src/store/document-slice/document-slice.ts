import { createSlice } from '@reduxjs/toolkit';
import { NameSpace } from '../../const';
import { DocumentState } from '../../types/state';

const initialState: DocumentState = {
  document: null,
  text: '',
  addTextMessage: ''
};

export const documentSlice = createSlice({
  name: NameSpace.document,
  initialState,
  reducers: {
    getDocumentAndBreadcrumb: (state, action) => {
      state.document = action.payload.document;
    },
    showText: (state, action) => {
      state.text = action.payload;
    },
    getAddTextMessage: (state, action) => {
      state.addTextMessage = action.payload;
    }
  }
});

export const { getDocumentAndBreadcrumb, showText, getAddTextMessage } =
  documentSlice.actions;
