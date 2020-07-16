import { FETCH_DATA_PENDING, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './contants';

export const fetchDataPending = () => ({
  type: FETCH_DATA_PENDING,
});

export const fetchDataSuccess = products => ({
  type: FETCH_DATA_SUCCESS,
  products,
});

export const fetchDataError = error => ({
  type: FETCH_DATA_ERROR,
  error,
});
