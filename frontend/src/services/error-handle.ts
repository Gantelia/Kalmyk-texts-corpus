import { ErrorType } from '../types/error';
import request from 'axios';
import { store } from '../store';
import { setError } from '../store/actions';
import { clearErrorAction } from '../store/api-actions/error-actions';
import { HTTP_CODE } from '../const';

export const errorHandle = (error: ErrorType): void => {
  const handleError = (message: string) => {
    store.dispatch(setError(message));
    store.dispatch(clearErrorAction());
  };

  if (!request.isAxiosError(error)) {
    handleError('Что-то пошло не так...');
    throw error;
  }

  const { response } = error;

  if (response) {
    switch (response.status) {
      case HTTP_CODE.BAD_REQUEST:
        handleError(response.data.detail);
        break;
      case HTTP_CODE.NOT_FOUND:
        handleError(response.data.detail);
        break;
    }
  }
};
