import { createStore, combineReducers } from 'redux';
import { productReducer } from './productReducer';

const reducers = combineReducers({
  products: productReducer,
});

const store = createStore(reducers);

export default store;
