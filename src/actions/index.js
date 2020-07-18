import { FETCH_COUNTRY_NAME, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR, CHANGE_FILTER } from './contants';

export const fetchCountryName = countries => ({
  type: FETCH_COUNTRY_NAME,
  countries,
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
