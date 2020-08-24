import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from './test-utilis';
import App from '../components/container/App';

it('Renders the connected app with initialState', () => {
  render(<BrowserRouter><App /></BrowserRouter>, {
    initialState: {
      products: [{ companyName: 'Redux User', symbol: 'FB' }],
      error: 'we can not find',
    },
  });

  expect(screen.getByText(/loading.../i)).toBeInTheDocument();
});
