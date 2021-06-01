import { render } from '@testing-library/react';
import { support } from '../../../../assets/footerItems';
import { List } from './List';
import { BrowserRouter as Router } from 'react-router-dom';

describe('Footer list', () => {
  const renderInfo = () => {
    return render(
      <Router>
        <List items={support} label="Лист" />
      </Router>,
    );
  };
  it('List should be in the document', () => {
    const { getByText } = renderInfo();
    expect(getByText('Лист')).toBeInTheDocument();
  });
  it('List items should be in the document', () => {
    const { getByText } = renderInfo();
    expect(getByText(support[2].linkName)).toBeInTheDocument();
  });
});
