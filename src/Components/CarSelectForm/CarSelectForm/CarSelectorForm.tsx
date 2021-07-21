import { Button, Paper, RangeSlider } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { BottomPart } from '../Components/ButtomPart/BottomPart';

import { MakePicker } from '../Components/MakePicker/MakePicker';
import { MillageForm } from '../Components/MillageForm/MillageForm';
import { ModelForm } from '../Components/ModelForm/ModelForm';
import './CarSelectorForm.scss';
export const CarSelectorForm = () => {
  const [selectedData, setSelectedData] = React.useState({});
  const { t } = useTranslation();

  console.log(selectedData);
  return (
    <Paper display={'flex'} style={{ padding: 15 }} height={397}>
      <MakePicker setSelectedData={setSelectedData} />
      <div className="car-selector-from__wrapper" data-testid="car-selector-from__wrapper">
        <div style={{ display: 'flex' }}>
          <ModelForm setSelectedData={setSelectedData} />
          <MillageForm setSelectedData={setSelectedData} />
        </div>
        <BottomPart />
      </div>
    </Paper>
  );
};
