import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header/navbar', () => {
  render(<App />);
  const linkElement = screen.getByText(/teams/i);
  expect(linkElement).toBeInTheDocument();
});
