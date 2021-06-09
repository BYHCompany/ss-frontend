import { render } from '@testing-library/react';
import React from 'react';
import { SpecialOffers } from './SpecialOffers';

describe('SpecialOffers', () => {
  const getSpecialOffers = () => {
    return render(<SpecialOffers />);
  };
  it('SpecialOffers should be rendered in the document', () => {
    const { getByTestId } = getSpecialOffers();
    expect(getByTestId('SpecialOffers-wrapper')).toBeInTheDocument();
  });
});
