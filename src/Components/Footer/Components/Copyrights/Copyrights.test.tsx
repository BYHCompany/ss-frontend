import { render } from '@testing-library/react';
import { Copyrights } from './Copyrights';
describe('Footer copyrights component', () => {
  const renderCopyrights = () => render(<Copyrights />);
  it('Copyrights should be in the document', () => {
    const { getByText } = renderCopyrights();
    expect(getByText('All copyrights reserved')).toBeInTheDocument();
  });
});

export {};
