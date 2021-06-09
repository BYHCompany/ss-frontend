import { render } from '@testing-library/react';
import React from 'react';
import { TopicsSlider } from './TopicsSlider';

describe('TopicsSlider', () => {
  const getTopicsSlider = () => {
    return render(<TopicsSlider />);
  };
  it('TopicsSliders should be rendered in the document', () => {
    const { getByTestId } = getTopicsSlider();
    expect(getByTestId('TopicsSlider-wrapper')).toBeInTheDocument();
  });
});
