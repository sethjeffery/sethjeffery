import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the Seth page by default', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hello, I'm Seth/i);
  expect(linkElement).toBeInTheDocument();
});
