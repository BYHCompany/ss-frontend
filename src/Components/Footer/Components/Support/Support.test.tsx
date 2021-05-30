import { render } from '@testing-library/react';
import { Support } from './Support';
describe('Footer support', () => {
  const renderInfo = () => render(<Support />);
  it('Footer should be in the document', () => {
    const { getByText } = renderInfo();
    expect(getByText('Поддержка')).toBeInTheDocument();
  });
});
