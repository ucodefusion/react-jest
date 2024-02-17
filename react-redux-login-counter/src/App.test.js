import { render, screen } from '@testing-library/react';
import App from './App';

test('renders dynamic content', async () => {
  render(<App />);
  const dynamicElement = await screen.findByText(/a/i);
  expect(dynamicElement).toBeInTheDocument();
});

