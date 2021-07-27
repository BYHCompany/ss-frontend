import { Button, Paper, Title } from 'byh-components';
import React, { Dispatch, SetStateAction } from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import {
  fetchMake,
  fetchModel,
  fetchSearchDataForCount,
  setMake,
} from '../../../../Store/ducks/searchCar/searchCarReducer';
import { getSearchCarMake } from '../../../../Store/ducks/searchCar/searchCarSelector';
import './MakePicker.scss';

interface IProps {
  setSelectedData: Dispatch<SetStateAction<{}>>;
}
export const MakePicker: React.FC<IProps> = ({ setSelectedData }) => {
  const [tookMake, setTookMake] = React.useState('');
  const carMakes = useSelector(getSearchCarMake);
  const dispatch = useDispatch();
  const { t } = useTranslation();
  const selectMake = (make: string) => {
    setTookMake(make);
  };
  React.useEffect(() => {
    dispatch(fetchMake());

    tookMake && dispatch(fetchModel(tookMake));
    setSelectedData((prev) => ({ ...prev, make: tookMake }));

    return () => {
      dispatch(setMake(null));
    };
  }, [dispatch, tookMake, setSelectedData]);

  return (
    <div data-testid="make-picker" style={{ marginRight: 15 }}>
      <Title variant="primary" type="medium">
        {t('mainPage:carSelectForm.label')}
      </Title>
      <Paper
        className="make-picker__wrapper"
        customBgColor="#fff"
        height={314}
        width={292}
        boxShadow={false}>
        <Title type="ultraSmall" variant="default">
          {t('mainPage:carSelectForm.famousMake')}
        </Title>
        <div className="make__wrapper">
          <ul className="make-picker__content">
            {carMakes?.map((make) => (
              <li
                className={make === tookMake ? 'make-picker__selected-make' : ''}
                onClick={() => selectMake(make)}
                key={make}>
                {make}
              </li>
            ))}
          </ul>
        </div>
        <Button fullWidth fontSize={18} variant="primary">
          {t('mainPage:buttons.others')}
        </Button>
      </Paper>
    </div>
  );
};
