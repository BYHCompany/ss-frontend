import { render } from '@testing-library/react';
import { items } from '../../Footer/Footer';
import { List } from './List';
describe('Footer list', () => {
  const renderInfo = () => render(<List items={items} label="Лист" />);
  it('Footer should be in the document', () => {
    const { getByText } = renderInfo();
    expect(getByText('Лист')).toBeInTheDocument();
  });
});
