import { render } from '@testing-library/react';
import { Mobile } from './Mobile';
describe('Footer mobile', () => {
  const renderMobile = () => render(<Mobile label="Мобилка" />);
  it('Mobile block should be in the document', () => {
    const { getByText } = renderMobile();
    expect(getByText('Мобилка')).toBeInTheDocument();
  });
});
