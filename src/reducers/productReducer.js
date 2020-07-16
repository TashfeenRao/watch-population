import { FETCH_DATA_PENDING, FETCH_DATA_SUCCESS, FETCH_DATA_ERROR } from '../actions/contants';

const initialState = {
  pending: false,
  products: [],
  error: null,
};

export const productReducer = (state = initialState, action) => {
  switch (action.typeOf) {
    case FETCH_DATA_PENDING:
      return {
        ...state,
        pending: true,
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        products: action.payload,
      };
    case FETCH_DATA_ERROR:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export const getProducts = state => state.products;
export const getPending = state => state.pending;
export const getError = state => state.error;
