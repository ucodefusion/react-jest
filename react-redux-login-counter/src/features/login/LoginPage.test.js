import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import LoginPage from './LoginPage';

test('renders login page', () => {
  render(<LoginPage />);
  const linkElement = screen.getByText(/login/i);
  expect(linkElement).toBeInTheDocument();
});
