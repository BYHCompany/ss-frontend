import { render } from '@testing-library/react';
import React from 'react';
import { HeaderButtons } from './HeaderButtons';

describe('HeaderButtons', () => {
  const getButtons = () => {
    return render(<HeaderButtons />);
  };

  it('HeaderButtons should be rendered in the document', () => {
    const { getByTestId } = getButtons();
    expect(getByTestId('header-buttons')).toBeInTheDocument();
  });
});
