import { Button } from 'byh-components';
import React from 'react';

import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { fetchSearchData } from '../../../../Store/ducks/searchCar/searchCarReducer';
import {
  getCarFormIsLoading,
  getSearchMessage,
} from '../../../../Store/ducks/searchCar/searchCarSelector';
import './BottomPart.scss';

interface IProps {
  selectedData: {};
}
export const BottomPart: React.FC<IProps> = ({ selectedData }) => {
  const { t } = useTranslation();
  const message = useSelector(getSearchMessage);
  const dispatch = useDispatch();
  const isLoading = useSelector(getCarFormIsLoading);
  const fetchingData = () => {
    dispatch(fetchSearchData(selectedData));
  };
  const noResults = message === 'No ads found for your search ';
  return (
    <div className="result-button__wrapper">
      <div>
        {/* <RangeSlider min={0} max={100} width={322} callback={rangeSliderFunc} /> */}
        <p>{message}</p>
      </div>
      <NavLink to="/advertsPage/">
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <Button
            disabled={noResults ? true : false}
            onClick={() => fetchingData()}
            width={300}
            height={45}
            variant="primary"
            fontSize={22}>
            {t('mainPage:buttons.find')}
          </Button>
        )}
      </NavLink>
    </div>
  );
};
