import { FETCH_DATA_PENDING, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from './contants';

const fetchDataPending = () => ({
  type: FETCH_DATA_PENDING,
});

const fetchDataSuccess = products => ({
  type: FETCH_DATA_SUCCESS,
  products,
});

const fetchDataError = error => ({
  type: FETCH_DATA_ERROR,
  error,
});
