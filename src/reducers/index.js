import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import loading from './loading';
import filterReducer from './filterReducer';
import errorReducer from './errorReducer';

export default combineReducers({
  products: productReducer,
  loading,
  input: filterReducer,
  error: errorReducer,
});
