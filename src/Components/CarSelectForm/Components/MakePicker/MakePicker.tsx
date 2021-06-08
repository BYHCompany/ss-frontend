import { Button, Paper, Title } from 'byh-components';
import React from 'react';
import './MakePicker.scss';

export const MakePicker = () => {
  return (
    <div data-testid="make-picker" style={{ marginRight: 15 }}>
      <Title variant="primary" type="medium">
        Подобрать авто
      </Title>
      <Paper
        className="make-picker__wrapper"
        customBgColor="#fff"
        height={314}
        width={292}
        boxShadow={false}>
        <Title type="ultraSmall" variant="default">
          Популярные марки
        </Title>
        <div className="make__wrapper"></div>
        <Button fullWidth fontSize={18} variant="primary">
          Другие...
        </Button>
      </Paper>
    </div>
  );
};
