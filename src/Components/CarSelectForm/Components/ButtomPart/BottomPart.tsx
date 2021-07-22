import { Button } from 'byh-components';
import React from 'react';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getSearchMessage } from '../../../../Store/ducks/searchCar/searchCarSelector';
import './BottomPart.scss';
export const BottomPart = () => {
  const { t } = useTranslation();
  const message = useSelector(getSearchMessage);

  return (
    <div className="result-button__wrapper">
      <div>
        {/* <RangeSlider min={0} max={100} width={322} callback={rangeSliderFunc} /> */}
        <p>{message}</p>
      </div>

      <Button width={300} height={45} variant="primary" fontSize={22}>
        {t('mainPage:buttons.find')}
      </Button>
    </div>
  );
};
