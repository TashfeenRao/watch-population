import '@testing-library/react';
import productReducer from '../reducers/productReducer';
import { FETCH_DATA_SUCCESS } from '../actions/contants';
import { fetchDataSuccess } from '../actions/index';

describe('Product Reducer', () => {
  it('it handles product reducer', () => {
    const initialState = [];
    const newState = productReducer(undefined, []);
    expect(newState).toEqual(initialState);
  });
  test('should display Reducer ouptut', () => {
    const initialState = [];
    const products = [{
      comapnayName: 'FB',
      CEO: 'Mark',
    }];
    expect(productReducer(initialState, {
      type: FETCH_DATA_SUCCESS,
      products,
    })).toEqual([{
      comapnayName: 'FB',
      CEO: 'Mark',
    }]);
  });

  test('should display products action creators output', () => {
    const products = [{
      comapnayName: 'FB',
      CEO: 'Mark',
    }];
    const expectedResult = {
      type: FETCH_DATA_SUCCESS,
      products,
    };
    expect(fetchDataSuccess(products)).toEqual(expectedResult);
  });
});
