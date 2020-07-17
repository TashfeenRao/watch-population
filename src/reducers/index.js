import { combineReducers } from 'redux';
import { productReducer } from './productReducer';
import loading from './loading';

export default combineReducers({
  products: productReducer,
  loading,
});
