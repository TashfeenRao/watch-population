import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import loading from './loading';
import countryReducer from './countryReducer';
import filterReducer from './filterReducer';

export default combineReducers({
  products: productReducer,
  loading,
  countries: countryReducer,
  input: filterReducer,
});
