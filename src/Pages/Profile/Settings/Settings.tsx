import { Button, ImageComponent, Input, Paper, Textarea, Title } from 'byh-components';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import './Settings.scss';

type SettingsMenus = 'account' | 'privacy' | 'appearance';
type SelectedSex = 'man' | 'woman' | 'other';

interface Data {
  name: string;
  surname: string;
  about: string;
  sex: SelectedSex;
  otherSex?: string;
  location?: string;
  bd: string; // Birthday
  avatar: File;
}

export const Settings = () => {
  const [selectedType, setSelectedType] = React.useState<SettingsMenus>('account');
  const [selectedSex, setSelectedSex] = React.useState<SelectedSex>('man');

  const { control, handleSubmit } = useForm<Data>();

  //TODO:
  //1. Fix data : any

  const sendData = (data: Data) => {
    console.log(data);
  };

  const changeSex = (e: React.MouseEvent<HTMLElement>, sex: SelectedSex) => {
    e.preventDefault();
    setSelectedSex(sex);
  };

  return (
    <Paper display="grid" className="settings__wrapper">
      <div className="settings__photoAndName">
        <ImageComponent
          style={{ marginBottom: 14 }}
          width={207}
          height={207}
          src="https://images.unsplash.com/photo-1621201523018-4744fee81b17?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
        />
        <p className="settings__name">Имя</p>
        <p className="settings__name">Фамилия</p>
      </div>
      <div className="settings__mainContent">
        <Title style={{ marginBottom: 20 }} customVariantColor="#000000" type="medium">
          Настройки
        </Title>
        <div className="settings__selectorWrapper">
          <div className="settings__selector">
            <p
              onClick={() => setSelectedType('account')}
              className={`settings__selector__item ${
                selectedType === 'account' && 'settings__bold'
              }`}>
              Аккаунт
            </p>
            <p
              onClick={() => setSelectedType('privacy')}
              className={`settings__selector__item ${
                selectedType === 'privacy' && 'settings__bold'
              }`}>
              Конфиденциальность
            </p>
            <p
              onClick={() => setSelectedType('appearance')}
              className={`settings__selector__item ${
                selectedType === 'appearance' && 'settings__bold'
              }`}>
              Окружение
            </p>
          </div>
        </div>
        <form onSubmit={handleSubmit(sendData)} className="settings__formWrapper">
          <div className="settings__formGrid">
            <div className="settings__left">
              <div className="settings__mainInputs">
                <Controller
                  control={control}
                  name="name"
                  render={({ field: { value, onChange } }) => (
                    <Input
                      className="settings__input"
                      width={300}
                      height={40}
                      value={value}
                      onChange={onChange}
                      variant="secondary"
                      placeholder="Имя"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="surname"
                  render={({ field: { value, onChange } }) => (
                    <Input
                      className="settings__input"
                      width={300}
                      height={40}
                      value={value}
                      onChange={onChange}
                      variant="secondary"
                      placeholder="Фамилия"
                    />
                  )}
                />
                <Controller
                  control={control}
                  name="about"
                  render={({ field: { value, onChange } }) => (
                    <Textarea
                      value={value}
                      onChange={onChange}
                      variant="primary"
                      placeholder="О себе"
                      width={300}
                      height={200}
                    />
                  )}
                />
              </div>
              <div className="settings__sexSelector">
                <Title style={{ marginBottom: 10 }} customVariantColor="#000000" type="ultraSmall">
                  Пол
                </Title>
                <div className="settings__sexButtons">
                  <Button
                    onClick={(e: React.MouseEvent<HTMLElement>) => changeSex(e, 'man')}
                    variant={selectedSex === 'man' ? 'primary' : 'secondary'}
                    width={80}
                    height={27}
                    fontSize={14}>
                    Мужской
                  </Button>
                  <Button
                    onClick={(e: React.MouseEvent<HTMLElement>) => changeSex(e, 'woman')}
                    variant={selectedSex === 'woman' ? 'primary' : 'secondary'}
                    width={80}
                    height={27}
                    fontSize={14}>
                    Женский
                  </Button>
                  <Button
                    onClick={(e: React.MouseEvent<HTMLElement>) => changeSex(e, 'other')}
                    variant={selectedSex === 'other' ? 'primary' : 'secondary'}
                    width={80}
                    height={27}
                    fontSize={14}>
                    Другой
                  </Button>
                </div>
                {selectedSex === 'other' && (
                  <Controller
                    control={control}
                    name="sex"
                    render={({ field: { value, onChange } }) => (
                      <Input
                        value={value}
                        onChange={onChange}
                        className=""
                        variant="secondary"
                        placeholder="Пол (необязательно)"
                        width={300}
                        height={40}
                      />
                    )}
                  />
                )}
              </div>
              <div className="settings__location">
                <Title
                  style={{ marginBottom: 5 }}
                  type="ultraSmall"
                  customVariantColor="#000000"
                  variant="primary">
                  Местоположение
                </Title>
                <Button fontSize={18} variant="primary" width={115} height={40}>
                  Изменить
                </Button>
              </div>
              <div className="settings__birthDay">
                <Title
                  style={{ marginBottom: 5 }}
                  variant="primary"
                  customVariantColor="#000000"
                  type="ultraSmall">
                  Дата рождения
                </Title>
                <Controller
                  control={control}
                  name="bd"
                  render={({ field: { value, onChange } }) => (
                    <Input
                      value={value}
                      onChange={onChange}
                      className=""
                      placeholder="dd-mm-yyyy"
                      type="date"
                      width={300}
                      height={40}
                      variant="secondary"
                    />
                  )}
                />
              </div>
            </div>
            <div className="settings__right">
              <ImageComponent
                style={{ marginBottom: 5 }}
                width={290}
                height={290}
                src="https://images.unsplash.com/photo-1621525278689-4779d647a9f1?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80"
              />
              <div className="settings__fileWrapper">
                <input
                  accept="image/*"
                  id="actual-btn"
                  type="file"
                  className="settings__fileInput"
                  hidden
                />
                <label htmlFor="actual-btn" className="settings__fileUpload__label">
                  Загрузить новое фото
                </label>
              </div>
            </div>
          </div>
          <div className="settings__continue">
            <Button type="submit" width={170} height={43} variant="primary" fontSize={24}>
              Сохранить
            </Button>
          </div>
        </form>
      </div>
    </Paper>
  );
};
