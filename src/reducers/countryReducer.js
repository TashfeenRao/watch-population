import { FETCH_COUNTRY_NAME } from '../actions/contants';

const countryReducer = (state = [], action) => {
  switch (action.type) {
    case FETCH_COUNTRY_NAME:
      return action.countries;
    default:
      return state;
  }
};
export default countryReducer;
