import { render, screen } from '@testing-library/react';
import React from 'react';
import { ProfileInfo } from '..';
import { profileInfoData } from '../../../assets/profileInfoData';

describe('ProfileInfo', () => {
  const getProfileInfo = () => {
    return render(<ProfileInfo profileInfoData={profileInfoData} />);
  };
  it('ProfileInfo should be rendered in the document', () => {
    const { getAllByTestId } = getProfileInfo();
    const profileInfoData = getAllByTestId('paper');
    expect(profileInfoData[0]).toBeInTheDocument();
  });
  it('FullName Info should be rendered in the document', () => {
    const { getByTestId } = getProfileInfo();
    const fullNameInfo = getByTestId('fullName-info');
    expect(fullNameInfo).toBeInTheDocument();
  });
  it('First Name and Last name should be rendered in the document', () => {
    const { getAllByTestId } = getProfileInfo();
    const fullName = getAllByTestId('h3');
    expect(fullName[0]).toBeInTheDocument();
    expect(fullName[1]).toBeInTheDocument();
  });
  it('Location should be rendered in the document', () => {
    const { getByTestId } = getProfileInfo();
    const location = getByTestId('h5');
    expect(location).toBeInTheDocument();
  });
  it('Image should be rendered in the document', () => {
    const { getByTestId } = getProfileInfo();
    const photo = getByTestId('imgDiv');
    expect(photo).toBeInTheDocument();
  });
});
