import { render } from '@testing-library/react';
import React from 'react';
import { MainPage } from '..';

describe('MainPage', () => {
  const getMainPage = () => {
    return render(<MainPage />);
  };
  it('MainPage should be rendered in the document', () => {
    const { getByTestId } = getMainPage();
    expect(getByTestId('mainPage_wrapper')).toBeInTheDocument();
  });
});
