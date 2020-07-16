import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './reducers/index';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider>
      <App store={store} />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
