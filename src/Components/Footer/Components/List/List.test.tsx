import { render } from '@testing-library/react';
import { support } from '../../../../assets/footerItems';
import { List } from './List';

describe('Footer list', () => {
  const renderInfo = () => render(<List items={support} label="Лист" />);
  it('Footer should be in the document', () => {
    const { getByText } = renderInfo();
    expect(getByText('Лист')).toBeInTheDocument();
  });
});
