import { render } from '@testing-library/react';
import React from 'react';
import { AdvertPreview } from '..';
import { advertData } from '../../../assets/advertPreviewData';

describe('AdvertPreview', () => {
  const getPreview = () => {
    return render(<AdvertPreview advertData={advertData} />);
  };

  it('AdvertPreview should be rendered in the document', () => {
    const { getAllByTestId } = getPreview();
    const PreviewWrapper = getAllByTestId('paper');
    expect(PreviewWrapper[0]).toBeInTheDocument();
  });
});
