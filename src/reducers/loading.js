import { FETCH_DATA_SUCCESS, FETCH_COUNTRY_SUCCESS } from '../actions/contants';

const loading = (state = true, action) => {
  switch (action.type) {
    case FETCH_DATA_SUCCESS:
      return false;
    case FETCH_COUNTRY_SUCCESS:
      return false;
    default:
      return state;
  }
};
export default loading;
