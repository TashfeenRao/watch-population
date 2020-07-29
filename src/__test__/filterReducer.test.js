import '@testing-library/react';
import filterReducer from '../reducers/filterReducer';
import { CHANGE_FILTER } from '../actions/contants';
import { changeFilter } from '../actions/index';

describe('Filter Reducer', () => {
  test('it handles filter reducer', () => {
    const initialState = '';
    const newState = filterReducer(undefined, {});
    expect(newState).toEqual(initialState);
  });
  test('it display change filter input', () => {
    const input = 'fb';
    const expectResult = {
      type: CHANGE_FILTER,
      input,
    };
    expect(changeFilter(input)).toEqual(expectResult);
  });
});
