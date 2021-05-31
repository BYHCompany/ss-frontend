import { render, screen } from '@testing-library/react';
import React from 'react';
import { Tags } from './Tags';

describe('Tags', () => {
  const tags = [
    {
      backgroundColor: 'red',
      id: 'mark',
      name: 'Toyota',
    },
  ];

  const getTag = () => {
    return render(<Tags tags={tags} />);
  };

  it('Tags should be rendered in the document', () => {
    const { getByTestId } = getTag();
    const Tag = getByTestId('paper');
    expect(Tag).toBeInTheDocument();
  });
  it('Text should be correct', () => {
    const { getByText } = getTag();
    const Tag = getByText('Toyota');
    expect(Tag).toBeInTheDocument();
  });
  it('backgroundColor should be correct', () => {
    const { getByTestId } = getTag();
    const Tag = getByTestId('paper');
    expect(Tag).toHaveStyle({
      background: 'red',
    });
  });
});
