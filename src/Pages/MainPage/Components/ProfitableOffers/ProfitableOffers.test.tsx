import { render } from '@testing-library/react';
import React from 'react';
import { ProfitableOffers } from './ProfitableOffers';

describe('ProfitableOffers', () => {
  const getProfitableOffers = () => {
    return render(<ProfitableOffers />);
  };
  it('ProfitableOffers should be rendered in the document', () => {
    const { getByTestId } = getProfitableOffers();
    expect(getByTestId('profitableOffers-wrapper')).toBeInTheDocument();
  });
});
