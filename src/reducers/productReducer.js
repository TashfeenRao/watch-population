import { FETCH_DATA_SUCCESS } from '../actions/contants';

export const productReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return action.products;

    default:
      return state;
  }
};

export const getProducts = state => state.products;
export const getPending = state => state.pending;
export const getError = state => state.error;
