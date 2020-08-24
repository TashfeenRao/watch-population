import { FETCH_DATA_SUCCESS } from '../actions/contants';

const productReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return action.products;

    default:
      return state;
  }
};
export default productReducer;
