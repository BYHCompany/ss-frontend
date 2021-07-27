import { Button } from 'byh-components';
import React from 'react';

import { Trans, useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSearchData } from '../../../../Store/ducks/searchCar/searchCarReducer';
import {
  getCarFormIsLoading,
  getSearchMessage,
} from '../../../../Store/ducks/searchCar/searchCarSelector';
import './BottomPart.scss';
import { NavLink } from 'react-router-dom';
import { searchAdvert } from '../../../../GlobalTypes/searchAdvert';
import { setStringToQuery } from '../../../../services/setStringToQuery';

interface IProps {
  selectedData: searchAdvert;
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
  // i18n.t('advertPage:gearBox.value.variable');
  return (
    <div className="result-button__wrapper">
      <div>
        {/* <RangeSlider min={0} max={100} width={322} callback={rangeSliderFunc} /> */}
        {noResults ? (
          <p className={noResults ? 'buttonPart__noResult-text' : ''}>
            {t('mainPage:carSelectForm.messages.noResult')}
          </p>
        ) : (
          <p>
            <Trans i18nKey={'mainPage:carSelectForm.messages.result'}> {{ message }} </Trans>
          </p>
        )}
      </div>
      {isLoading ? (
        <div> loading...</div>
      ) : (
        <NavLink to={`/advertsPage/search?${setStringToQuery(selectedData)}`}>
          <Button
            disabled={noResults ? true : false}
            onClick={() => fetchingData()}
            width={300}
            height={45}
            variant="primary"
            fontSize={22}>
            {t('mainPage:buttons.find')}
          </Button>
        </NavLink>
      )}
    </div>
  );
};
