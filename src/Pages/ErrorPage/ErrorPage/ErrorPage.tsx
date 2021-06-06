import { Button, Title } from 'byh-components';
import React from 'react';
import './ErrorPage.scss';
import { BiErrorCircle } from 'react-icons/bi';

export const ErrorPage = () => {
  return (
    <div className="error__wrapper">
      <div className="error__content">
        <Title
          style={{ marginBottom: 10 }}
          type="large"
          variant="primary"
          text="Что-то пошло не так..."
        />
        <p className="error_description">
          Вы можете обратиться в центр поддержки или вернуться на главную страницу используя кнопки
          ниже
        </p>
        <div>
          <Button
            style={{ marginRight: '10px' }}
            width={170}
            height={60}
            fontSize={26}
            label="Главная"
            variant="primary"
          />
          <Button width={170} height={60} fontSize={26} label="Помощь " variant="primary" />
        </div>
      </div>
      <BiErrorCircle className="error__icon" />
    </div>
  );
};
