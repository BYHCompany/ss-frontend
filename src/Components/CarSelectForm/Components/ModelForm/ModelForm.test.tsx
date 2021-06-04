import { render } from '@testing-library/react';
import React from 'react';
import { ModelForm } from './ModelForm';

describe('ModelForm', () => {
  const getForm = () => {
    return render(<ModelForm />);
  };

  it('ModelForm should be rendered in the document', () => {
    const { getByTestId } = getForm();
    expect(getByTestId('model-form__wrapper')).toBeInTheDocument();
  });
});
