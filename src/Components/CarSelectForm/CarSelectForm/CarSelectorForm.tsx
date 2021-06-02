import { Paper } from 'byh-components';
import React from 'react';
import { MakePicker } from '../Components/MakePicker/MakePicker';
import { ModelForm } from '../Components/ModelForm/ModelForm';

export const CarSelectorForm = () => {
  const [data, setData] = React.useState<carSelectType>({});

  return (
    <Paper style={{ padding: 15 }} height={397}>
      <MakePicker setData={setData} />
      <ModelForm setData={setData} />
    </Paper>
  );
};
