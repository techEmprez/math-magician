import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import Home from '../components/Home';

describe('Should Home component render', () => {
  test('renders the Home', () => {
    render(<Home />);
    const titleElement = screen.getByRole('heading', { name: 'Welcome to our Math Magician Page' });
    expect(titleElement).toBeInTheDocument();
  });
});
