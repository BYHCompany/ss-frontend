import { Title } from 'byh-components';
import React from 'react';
import { useSelector } from 'react-redux';
import { getAdvertTitle } from '../../../../Store/ducks/advert/advertSelector';

export const AdvertTitle = () => {
  const advertTitle = useSelector(getAdvertTitle);

  if (!advertTitle) {
    return null;
  }

  return (
    <Title style={{ marginBottom: 20 }} variant="primary" type="small">
      {advertTitle}
    </Title>
  );
};
