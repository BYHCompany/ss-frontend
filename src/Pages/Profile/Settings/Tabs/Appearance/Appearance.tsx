import { Button, Toggler } from 'byh-components';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ReactComponent as ThemePreview } from '../../../../../assets/img/plates/ThemePreview.svg';
import './Appearance.scss';

interface ApperianceData {
  darkTheme: boolean;
  isImperalSys: boolean;
}

export const Appearance: React.FC = () => {
  const { control, handleSubmit } = useForm<ApperianceData>();

  const sendData = (data: ApperianceData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(sendData)} className="appearance__wrapper">
      <div className="appearance__left">
        <div className="appearance__settingWrapper">
          <Controller
            control={control}
            name="darkTheme"
            render={({ field: { value, onChange } }) => (
              <Toggler value={value} onChange={onChange} />
            )}
          />
          <p>Темная Тема</p>
        </div>
        <div className="appearance__settingWrapper">
          <Controller
            control={control}
            name="isImperalSys" //system of measures
            render={({ field: { value, onChange } }) => (
              <Toggler value={value} onChange={onChange} />
            )}
          />
          <p>Имперская система</p>
        </div>
      </div>
      <div className="appearance__right">
        <div className="appearance__themePreview">
          <ThemePreview style={{ marginBottom: 10 }} />
          <p className="appearance__themePreview__text">Бережёт ваши глаза в ночное время суток</p>
        </div>
        <Button width={170} height={43} variant="primary" fontSize={24}>
          Сохранить
        </Button>
      </div>
    </form>
  );
};
