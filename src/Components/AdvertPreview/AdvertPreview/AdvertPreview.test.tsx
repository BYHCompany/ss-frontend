import { render } from '@testing-library/react';
import React from 'react';
import { AdvertPreview } from '..';

describe('AdvertPreview', () => {
  const getPreview = () => {
    return render(
      <AdvertPreview
        id="1"
        title="Advert"
        photo="https://kursors.lv/wp-content/uploads/2019/09/2020-porsche-taycan.jpg"
        year="2020"
        isElectric={true}
        isInTrending={true}
        price="223 000 $"
      />,
    );
  };

  it('AdvertPreview should be rendered in the document', () => {
    const { getAllByTestId } = getPreview();
    const PreviewWrapper = getAllByTestId('paper');
    expect(PreviewWrapper[0]).toBeInTheDocument();
  });
});
