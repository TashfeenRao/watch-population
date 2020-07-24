import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Products from '../components/container/Products';

it('render serch box correctly', () => {
  const { queryByTestId, queryByPlaceholderText } = render(<Products />, { wrapper: Provider });
  expect(queryByTestId('filter')).toBeTruthy();
});
