import { render } from '@testing-library/react';
import React from 'react';
import { AuthTemplate } from '..';

describe('AuthTemplate', () => {
  const getPreview = () => {
    return render(<AuthTemplate>H1</AuthTemplate>);
  };

  it('AuthTemplate should be rendered in the document', () => {
    const { getByTestId } = getPreview();
    const PreviewWrapper = getByTestId('paper');
    expect(PreviewWrapper).toBeInTheDocument();
  });
});
