import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Root from './components/Root';
import reducer from './reducers/index';
import middleWare from './middleWare/index';

const store = createStore(reducer, middleWare);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'),
);
