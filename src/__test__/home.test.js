import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import Nav from '../components/presentational/nav';

describe('Home', () => {
  test('it should render nav', () => {
    render(<BrowserRouter><Nav /></BrowserRouter>);
  });
  test('it render title', () => {
    render(<BrowserRouter><Nav /></BrowserRouter>);
    expect(screen.getByText(/Watch Population/)).toBeInTheDocument();
  });
});
