import { render } from '@testing-library/react';
import React from 'react';
import { MillageForm } from './MillageForm';

describe('MillageForm', () => {
  const mock = () => {};
  const getForm = () => {
    return render(<MillageForm setSelectedData={mock} />);
  };

  it('MillageForm should be rendered in the document', () => {
    const { getByTestId } = getForm();
    expect(getByTestId('millage-form')).toBeInTheDocument();
  });
});
