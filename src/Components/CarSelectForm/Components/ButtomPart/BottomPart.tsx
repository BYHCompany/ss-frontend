import { Button } from 'byh-components';
import React from 'react';

import { useTranslation } from 'react-i18next';
import './BottomPart.scss';
export const BottomPart = () => {
  const { t } = useTranslation();

  return (
    <div className="result-button__wrapper">
      <div>{/* <RangeSlider min={0} max={100} width={322} callback={rangeSliderFunc} /> */}</div>

      <Button width={300} height={45} variant="primary" fontSize={22}>
        {t('mainPage:buttons.find')}
      </Button>
    </div>
  );
};
