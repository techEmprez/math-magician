import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Header from '../components/Header';

describe('Should render Header', () => {
  test('Renders Header component', () => {
    render(<MemoryRouter><Header /></MemoryRouter>);
    screen.debug();
  });
});
