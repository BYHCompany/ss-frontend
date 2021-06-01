import { render } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Footer } from './Footer';
describe('Footer', () => {
  const renderFooter = () =>
    render(
      <Router>
        <Footer />
      </Router>,
    );
  it('Footer shoul be in The Document', () => {
    const { getByText } = renderFooter();
    expect(getByText('Контакты')).toBeInTheDocument();
  });
});
