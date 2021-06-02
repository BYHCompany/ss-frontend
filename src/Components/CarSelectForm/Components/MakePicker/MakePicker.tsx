import { Button, Paper, Title } from 'byh-components';
import React from 'react';
import './MakePicker.scss';
interface MakePickerProps {
  setData: () => void;
}

export const MakePicker: React.FC<MakePickerProps> = ({ setData }) => {
  return (
    <div style={{ marginRight: 34 }}>
      <Title text="Подобрать авто" variant="primary" type="medium" />
      <Paper
        className="make-picker__wrapper"
        customBgColor="#fff"
        width={273}
        height={314}
        boxShadow={false}>
        <Title text="Популярные марки" type="ultraSmall" variant="default" />
        <div className="make__wrapper"></div>
        <Button label="Другие..." fullWidth fontSize={18} variant="primary" />
      </Paper>
    </div>
  );
};
