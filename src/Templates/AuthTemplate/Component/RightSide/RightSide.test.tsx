import { render } from '@testing-library/react';
import React from 'react';
import { RightSide } from './RightSide';

describe('RightSide of AuthTemplate', () => {
  const getPreview = () => {
    return render(<RightSide>H1</RightSide>);
  };

  it('RightSide should be rendered in the document', () => {
    const { getByTestId } = getPreview();
    const RightSide = getByTestId('right-side');
    expect(RightSide).toBeInTheDocument();
  });
});
