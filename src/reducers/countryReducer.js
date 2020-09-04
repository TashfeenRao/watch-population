import { FETCH_COUNTRY_SUCCESS } from '../actions/contants';

const countryReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_COUNTRY_SUCCESS:
      return action.country;
    default:
      return state;
  }
};
export default countryReducer;
