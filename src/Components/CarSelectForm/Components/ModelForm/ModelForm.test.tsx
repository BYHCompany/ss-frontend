import { render } from '@testing-library/react';
import React from 'react';
import { ModelForm } from './ModelForm';

describe('ModelForm', () => {
  const mock = () => {};
  const getForm = () => {
    return render(<ModelForm setSelectedData={mock} />);
  };

  it('ModelForm should be rendered in the document', () => {
    const { getByTestId } = getForm();
    expect(getByTestId('model-form__wrapper')).toBeInTheDocument();
  });
});
