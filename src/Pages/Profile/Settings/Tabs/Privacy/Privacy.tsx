import { Button, Input } from 'byh-components';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { ImPencil } from 'react-icons/im';
import './Privacy.scss';
import { IoKeySharp } from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { getAdditionalProfileInfo } from '../../../../../Store/ducks/profile/profileSelector';

interface PrivacyData {
  email: string;
  oldPass: string;
  pass1: string;
  pass2: string;
  phone: string;
}

interface RenderInputProps {
  name: keyof PrivacyData;
  placeholder: string;
  type?: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  defaultValue?: string;
}

interface Props {
  userID: string;
}

export const Privacy: React.FC<Props> = ({ userID }) => {
  const { control, handleSubmit } = useForm<PrivacyData>();

  const additionalInfo = useSelector(getAdditionalProfileInfo);

  const sendData = (data: PrivacyData) => {
    console.log(data);
  };

  const renderInput = ({
    name,
    placeholder,
    type,
    defaultValue,
    endIcon = null,
    startIcon = null,
  }: RenderInputProps) => {
    return (
      <Controller
        control={control}
        name={name}
        defaultValue={defaultValue}
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
            {renderInput({
              name: 'email',
              placeholder: 'E-mail',
              startIcon: <ImPencil />,
              defaultValue: additionalInfo.email ? additionalInfo.email : '',
            })}
          </div>
          <div className="settings__privacy__input">
            {renderInput({
              name: 'oldPass',
              placeholder: '???????????? ????????????',
              type: 'password',
            })}
          </div>
          <div className="privacy__inputWrapper settings__privacy__input">
            {renderInput({
              name: 'pass1',
              placeholder: '?????????? ????????????',
              type: 'password',
            })}
            <p className="privacy__input__strong">??????????????</p>
          </div>
          <div className="privacy__inputWrapper settings__privacy__input">
            {renderInput({
              name: 'pass2',
              placeholder: '??????????????????. ????????????',
              type: 'password',
            })}
            <p className="privacy__input__miss">???????????? ???? ??????????????????</p>
          </div>
          <div className="settings__privacy__input">
            {renderInput({
              name: 'phone',
              placeholder: '??????????????',
              type: 'tel',
              endIcon: <ImPencil />,
              defaultValue: additionalInfo.phone ? additionalInfo.phone : '',
            })}
          </div>
        </div>
        <div className="privacy__right">
          <div className="privacy__warn__wrapper">
            <h5 className="privacy__warn__label">??????????</h5>
            <IoKeySharp className="privacy__warn__icon" />
            <p className="privacy__warn__text">
              ???????????? ???? ?????????????????? ???????? ???????????? ???????????? ?? ??????????????????!
            </p>
            <p className="privacy__warn__descr">
              ???????? ?????????? ?????????????????????????????? ?????????????????? ?? ?????? ?????????? ???????????????? ?????????? ????????????????????????.
            </p>
          </div>
          <div className="privacy__submitButtonWrapper">
            <Button fontSize={24} variant="primary" height={43} width={170}>
              ??????????????????
            </Button>
          </div>
        </div>
      </div>
    </form>
  );
};
