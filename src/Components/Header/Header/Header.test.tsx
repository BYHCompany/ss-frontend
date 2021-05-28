import { render } from '@testing-library/react';
import { Header } from './Header';
describe('Header', () => {
  it('should', () => {
    const { getByTestId } = render(<Header />);
    expect(getByTestId('header')).toBeInTheDocument();
  });
});
