/* eslint-disable react/prop-types */
import React from 'react';
import { render as rtlRender } from '@testing-library/react';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from '../reducers/index';
import middleWare from '../middleWare/index';

const render = (ui,
  {
    initialState,
    store = createStore(reducer, initialState, middleWare),
    ...renderOptions
  } = {}) => {
  const Wrapper = ({ children }) => (<Provider store={store}>{children}</Provider>);
  return rtlRender(ui, { wrapper: Wrapper, ...renderOptions });
};
export * from '@testing-library/react';
export { render };
