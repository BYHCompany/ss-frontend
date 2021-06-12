import { Paper, Title, Button } from 'byh-components';
import React from 'react';
import { GiCheckMark } from 'react-icons/gi';
import './SuccessPage.scss';
export const SuccessPage = () => {
  return (
    <div className="successPage__wrapper">
      <Paper display="flex" maxWidth={1170} height={472} className="successPage__paper">
        <div className="successPage__successIcon--wrapper">
          <GiCheckMark className="successPage__successIcon" />
        </div>
        <Title style={{ marginBottom: 30 }} variant="primary" type={'medium'}>
          Объявление успешно добавлено 🎉 🎉 🎉
        </Title>

        <Title variant="primary" type={'ultraSmall'}>
          Вы успешно добавили объявление с вашим автомобилем
        </Title>
      </Paper>
      <Button height={60} width={490} fontSize={24} variant="primary">
        Перейти на страницу с объявлением
      </Button>
    </div>
  );
};
