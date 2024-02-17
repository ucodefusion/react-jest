import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import Counter from '../features/counter/Counter';
import { Provider } from 'react-redux';
import { store } from '../store';

test('renders counter component', () => {
  render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
  expect(screen.getByText(/counter/i)).toBeInTheDocument();
  expect(screen.getByText('0')).toBeInTheDocument();
});
