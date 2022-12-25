import { createAsyncThunk } from '@reduxjs/toolkit';
import { store } from '..';
import { TIMEOUT_SHOW_ERROR } from '../../const';
import { setError } from '../actions';

export const clearErrorAction = createAsyncThunk(
  'error/clearError',
  async () => {
    setTimeout(() => store.dispatch(setError('')), TIMEOUT_SHOW_ERROR);
  }
);
