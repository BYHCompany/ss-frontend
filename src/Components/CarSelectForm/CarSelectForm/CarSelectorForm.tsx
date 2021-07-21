import { Button, Paper, RangeSlider } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';

import { MakePicker } from '../Components/MakePicker/MakePicker';
import { MillageForm } from '../Components/MillageForm/MillageForm';
import { ModelForm } from '../Components/ModelForm/ModelForm';
import './CarSelectorForm.scss';
export const CarSelectorForm = () => {
  const [selectedData, setSelectedData] = React.useState({});
  const { t } = useTranslation();

  console.log(selectedData);

  const mockFunc = (minVal: number, maxVal: number) => {
    console.log(minVal, maxVal);
  };
  return (
    <Paper display={'flex'} style={{ padding: 15 }} height={397}>
      <MakePicker />
      <div className="car-selector-from__wrapper" data-testid="car-selector-from__wrapper">
        <div style={{ display: 'flex' }}>
          <ModelForm setSelectedData={setSelectedData} />
          <MillageForm setSelectedData={setSelectedData} />
        </div>
        <div className="range-button__wrapper">
          <div>
            <RangeSlider min={0} max={100} width={322} callback={mockFunc} />
          </div>
          <Button width={300} height={45} variant="primary" fontSize={22}>
            {t('mainPage:buttons.find')}
          </Button>
        </div>
      </div>
    </Paper>
  );
};
