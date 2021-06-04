import { render } from '@testing-library/react';
import React from 'react';
import { MakePicker } from './MakePicker';

describe('MakePicker', () => {
  const getForm = () => {
    return render(<MakePicker />);
  };

  it('MakePicker should be rendered in the document', () => {
    const { getByTestId } = getForm();
    expect(getByTestId('make-picker')).toBeInTheDocument();
  });
});
