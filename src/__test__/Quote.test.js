import { render } from '@testing-library/react';
import Quote from '../components/Quote';

describe('SHould Quote component render', () => {
  test('Renders quote', () => {
    render(<Quote />);
  });
});
