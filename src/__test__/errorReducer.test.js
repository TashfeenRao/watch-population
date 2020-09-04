import '@testing-library/react';
import errorReducer from '../reducers/errorReducer';
import { FETCH_DATA_ERROR } from '../actions/contants';
import { fetchDataError } from '../actions/index';

describe('Error Reducer', () => {
  test('it handles error reducer', () => {
    const initialState = [];
    const newState = errorReducer(undefined, []);
    expect(newState).toEqual(initialState);
  });
  test('should display Reducer output', () => {
    const initialState = [];
    const error = ['sorry we can not find defind item'];
    expect(errorReducer(initialState, {
      type: FETCH_DATA_ERROR,
      error,
    })).toEqual(error);
  });

  test('should display error message', () => {
    const error = 'can not find item';
    const expectedResult = {
      type: FETCH_DATA_ERROR,
      error,
    };
    expect(fetchDataError(error)).toEqual(expectedResult);
  });
});
