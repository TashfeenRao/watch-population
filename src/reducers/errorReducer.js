import { FETCH_DATA_ERROR } from '../actions/contants';

const errorReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_DATA_ERROR:
      return action.error;
    default:
      return state;
  }
};
export default errorReducer;
