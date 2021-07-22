import { Button, Toggler } from 'byh-components';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ReactComponent as ThemePreview } from '../../../../../assets/img/plates/ThemePreview.svg';
import { UiTheme } from '../../../../../GlobalTypes/profileTypes';
import { getSettingsProfileInfo } from '../../../../../Store/ducks/profile/profileSelector';
import './Appearance.scss';

interface AppearanceData {
  uiTheme: UiTheme;
  impSys: boolean;
}

export const Appearance: React.FC = () => {
  const { control, handleSubmit } = useForm<AppearanceData>();

  const settings = useSelector(getSettingsProfileInfo);

  const sendData = (data: AppearanceData) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(sendData)} className="appearance__wrapper">
      <div className="appearance__left">
        <div className="appearance__settingWrapper">
          <Controller
            control={control}
            name="uiTheme"
            defaultValue={settings.uiTheme}
            render={({ field: { value, onChange } }) => {
              let isDark = false;

              if (value === 'dark') isDark = true;

              const changeTheme = (bool: boolean) => {
                if (bool) {
                  onChange('dark');
                  return;
                }

                onChange('light');
              };

              return <Toggler value={isDark} onChange={changeTheme} />;
            }}
          />
          <p>Темная Тема</p>
        </div>
        <div className="appearance__settingWrapper">
          <Controller
            control={control}
            name="impSys" //system of measures
            defaultValue={settings.impSys}
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
