import { Button, Paper, Title } from 'byh-components';
import React from 'react';
import './MakePicker.scss';

export const MakePicker = () => {
  return (
    <div style={{ marginRight: 15 }}>
      <Title text="Подобрать авто" variant="primary" type="medium" />
      <Paper
        className="make-picker__wrapper"
        customBgColor="#fff"
        height={314}
        width={292}
        boxShadow={false}>
        <Title text="Популярные марки" type="ultraSmall" variant="default" />
        <div className="make__wrapper"></div>
        <Button label="Другие..." fullWidth fontSize={18} variant="primary" />
      </Paper>
    </div>
  );
};
