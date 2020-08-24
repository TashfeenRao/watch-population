import { combineReducers } from 'redux';
import productReducer from './productReducer';
import countryReducer from './countryReducer';
import loading from './loading';
import filterReducer from './filterReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  products: productReducer,
  country: countryReducer,
  loading,
  input: filterReducer,
  error: errorReducer,
});
