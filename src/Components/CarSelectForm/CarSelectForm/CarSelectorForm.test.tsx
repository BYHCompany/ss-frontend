import { render } from '@testing-library/react';
import React from 'react';
import { CarSelectorForm } from '..';

describe('CarSelectorForm', () => {
  const getForm = () => {
    return render(<CarSelectorForm />);
  };

  it('CarSelectorForm should be rendered in the document', () => {
    const { getByTestId } = getForm();
    expect(getByTestId('car-selector-from__wrapper')).toBeInTheDocument();
  });
});
