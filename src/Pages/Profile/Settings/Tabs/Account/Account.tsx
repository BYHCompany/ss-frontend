import { Button, ImageComponent, Input, Textarea, Title } from 'byh-components';
import React from 'react';
import { useEffect } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { ProfileSex } from '../../../../../GlobalTypes/profileTypes';
import { LoadingState } from '../../../../../Store/commonType';
import { fetchFullProfile } from '../../../../../Store/ducks/profile/profileReducer';
import {
  getAdditionalProfileInfo,
  getFullProfileLoadingState,
  getMainProfileInfo,
} from '../../../../../Store/ducks/profile/profileSelector';
import './Account.scss';

interface Data {
  name: string;
  surname: string;
  about: string;
  sex: ProfileSex;
  otherSex?: string;
  location?: string;
  bd: string; // Birthday
  avatar: File;
}

interface Props {
  userID: string;
}

export const Account: React.FC<Props> = ({ userID }): React.ReactElement | null => {
  const [selectedSex, setSelectedSex] = React.useState<ProfileSex>('male');
  const { control, handleSubmit } = useForm<Data>();

  const mainData = useSelector(getMainProfileInfo);
  const additionalInfo = useSelector(getAdditionalProfileInfo);
  const profileStatus = useSelector(getFullProfileLoadingState);

  useEffect(() => {
    additionalInfo.sex && setSelectedSex(additionalInfo.sex);
  }, [additionalInfo]);

  const sendData = (data: Data) => {
    console.log(data);
  };

  const changeSex = (e: React.MouseEvent<HTMLElement>, sex: ProfileSex) => {
    e.preventDefault();
    setSelectedSex(sex);
  };

  if (profileStatus === LoadingState.LOADING) {
    return null;
  }

  return (
    <form onSubmit={handleSubmit(sendData)} className="settings__formWrapper">
      <div className="settings__formGrid">
        <div className="settings__left">
          <div className="settings__mainInputs">
            {mainData.firstName && (
              <Controller
                control={control}
                name="name"
                defaultValue={mainData.firstName}
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
            )}
            {mainData.lastName && (
              <Controller
                control={control}
                name="surname"
                defaultValue={mainData.lastName}
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
            )}
            {additionalInfo.about && (
              <Controller
                control={control}
                name="about"
                defaultValue={additionalInfo.about}
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
            )}
          </div>
          {additionalInfo.sex && (
            <div className="settings__sexSelector">
              <Title style={{ marginBottom: 10 }} customVariantColor="#000000" type="ultraSmall">
                Пол
              </Title>
              <div className="settings__sexButtons">
                <Button
                  onClick={(e: React.MouseEvent<HTMLElement>) => changeSex(e, 'male')}
                  variant={selectedSex === 'male' ? 'primary' : 'secondary'}
                  width={80}
                  height={27}
                  fontSize={14}>
                  Мужской
                </Button>
                <Button
                  onClick={(e: React.MouseEvent<HTMLElement>) => changeSex(e, 'female')}
                  variant={selectedSex === 'female' ? 'primary' : 'secondary'}
                  width={80}
                  height={27}
                  fontSize={14}>
                  Женский
                </Button>
                <Button
                  onClick={(e: React.MouseEvent<HTMLElement>) => changeSex(e, 'other')}
                  variant={
                    selectedSex !== 'male' && selectedSex !== 'female' ? 'primary' : 'secondary'
                  }
                  width={80}
                  height={27}
                  fontSize={14}>
                  Другой
                </Button>
              </div>
              {selectedSex !== 'male' && selectedSex !== 'female' && (
                <Controller
                  control={control}
                  name="sex"
                  defaultValue={selectedSex}
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
          )}
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
  );
};
