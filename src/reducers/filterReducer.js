import { CHANGE_FILTER } from '../actions/contants';

const filterReducer = (state = '', action) => {
  switch (action.type) {
    case CHANGE_FILTER:
      return action.input;
    default:
      return state;
  }
};
export default filterReducer;
