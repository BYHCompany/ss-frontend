import { render } from '@testing-library/react';
import React from 'react';
import { LeftSide } from './LeftSide';

describe('LeftSide of AuthTemplate', () => {
  const getPreview = () => {
    return render(<LeftSide />);
  };

  it('LeftSide should be rendered in the document', () => {
    const { getByTestId } = getPreview();
    const LeftSide = getByTestId('left-side');
    expect(LeftSide).toBeInTheDocument();
  });
});
