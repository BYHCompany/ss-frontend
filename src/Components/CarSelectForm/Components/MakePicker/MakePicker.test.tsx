import { render } from '@testing-library/react';
import React from 'react';
import { MakePicker } from './MakePicker';

describe('MakePicker', () => {
  const mock = () => {};
  const getForm = () => {
    return render(<MakePicker setSelectedData={mock} />);
  };

  it('MakePicker should be rendered in the document', () => {
    const { getByTestId } = getForm();
    expect(getByTestId('make-picker')).toBeInTheDocument();
  });
});
