import {
  FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, CHANGE_FILTER, FETCH_COUNTRY_SUCCESS,
} from './contants';

export const fetchCountryName = country => ({
  type: FETCH_COUNTRY_SUCCESS,
  country,
});

export const fetchDataSuccess = products => ({
  type: FETCH_DATA_SUCCESS,
  products,
});

export const fetchDataError = error => ({
  type: FETCH_DATA_ERROR,
  error,
});

export const changeFilter = input => ({
  type: CHANGE_FILTER,
  input,
});
