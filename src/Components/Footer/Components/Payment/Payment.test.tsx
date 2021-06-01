import { render } from '@testing-library/react';
import { icons } from '../../../../assets/footerItems';
import { Payment } from './Payment';
describe('Footer payment info', () => {
  const renderPayment = () => render(<Payment label="payment" icons={icons} />);
  it('Payment should be in the document', () => {
    const { getByText } = renderPayment();
    expect(getByText('payment')).toBeInTheDocument();
  });
});
