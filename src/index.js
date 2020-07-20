import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import './index.css';
import App from './components/App';
import Root from './components/Root';
import reducer from './reducers/index';
import middleWare from './middleWare/index';

const store = createStore(reducer, middleWare);

ReactDOM.render(
  <Root store={store} />,
  document.getElementById('root'),
);
