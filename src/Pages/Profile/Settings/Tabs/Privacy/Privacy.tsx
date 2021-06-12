import { Button, Input } from 'byh-components';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ImPencil } from 'react-icons/im';
import './Privacy.scss';
import { IoKeySharp } from 'react-icons/io5';

interface PrivacyData {
  email: string;
  oldPass: string;
  pass1: string;
  pass2: string;
  phone: string;
}

export const Privacy: React.FC = () => {
  const { control, handleSubmit } = useForm<PrivacyData>();

  const sendData = (data: PrivacyData) => {
    console.log(data);
  };

  const renderInput = (
    name: keyof PrivacyData,
    placeholder: string,
    type: string = 'text',
    startIcon?: React.ReactNode,
    endIcon?: React.ReactNode,
  ) => {
    return (
      <Controller
        control={control}
        name={name}
        render={({ field: { value, onChange } }) => (
          <Input
            type={type}
            variant="secondary"
            className="privacy__inputBlock"
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            startIcon={startIcon}
            endIcon={endIcon}
            width={300}
            height={40}
          />
        )}
      />
    );
  };

  return (
    <form onSubmit={handleSubmit(sendData)}>
      <div className="settings__privacy__wrapper">
        <div className="privacy__left">
          <div className="settings__privacy__input">
            {renderInput('email', 'E-mail', '', <ImPencil />)}
          </div>
          <div className="settings__privacy__input">
            {renderInput('oldPass', 'Старый пароль', 'password')}
          </div>
          <div className="privacy__inputWrapper settings__privacy__input">
            {renderInput('pass1', 'Новый Пароль', 'password')}
            <p className="privacy__input__strong">Надёжно</p>
          </div>
          <div className="privacy__inputWrapper settings__privacy__input">
            {renderInput('pass2', 'Подтвержд. Пароля', 'password')}
            <p className="privacy__input__miss">Пароли не совпадают</p>
          </div>
          <div className="settings__privacy__input">
            {renderInput('phone', 'Телефон', 'tel', '+371', <ImPencil />)}
          </div>
        </div>
        <div className="privacy__right">
          <div className="privacy__warn__wrapper">
            <h5 className="privacy__warn__label">Важно</h5>
            <IoKeySharp className="privacy__warn__icon" />
            <p className="privacy__warn__text">
              Никому не доверяйте свои личные данные в интернете!
            </p>
            <p className="privacy__warn__descr">
              Этим могут воспользоваться мошенники и это будет угрожать вашей бесопасности.
            </p>
          </div>
          <div className="privacy__submitButtonWrapper">
            <Button fontSize={24} variant="primary" height={43} width={170}>
              Сохранить
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
