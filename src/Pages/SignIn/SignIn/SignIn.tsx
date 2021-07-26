import { Alert, Button, CheckBox, Input, Title } from 'byh-components';
import React, { useEffect } from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { LoadingState } from '../../../Store/commonType';
import { getLoginStatus } from '../../../Store/ducks/app/appSelector';
import { LoginData } from '../../../Store/ducks/auth/@types';
import { startLogin } from '../../../Store/ducks/auth/authReducer';
import { AuthTemplate } from '../../../Templates/AuthTemplate';
import './SignIn.scss';

type InputType = {
  pass: string;
  email: string;
  rememberMe: boolean;
};

export const SignIn = () => {
  const { t } = useTranslation();
  const { handleSubmit, control } = useForm();
  const dispatch = useDispatch();
  const loginStatus = useSelector(getLoginStatus);
  const history = useHistory();

  const onSubmit: SubmitHandler<InputType> = (data: LoginData) => {
    const dataForReq = {
      email: data.email,
      pass: data.pass,
    };
    dispatch(startLogin(dataForReq));
  };

  useEffect(() => {
    if (loginStatus === LoadingState.SUCCESS) {
      setTimeout(() => {
        history.goBack();
      }, 1300);
    }
  }, [loginStatus, history]);

  return (
    <AuthTemplate>
      <div className="signIn__wrapper">
        <div className="signIn-content__wrapper">
          <Title variant="primary" type="ultraLarge">
            SS V8
          </Title>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="signIn-email__input">
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <Input
                    onChange={onChange}
                    value={value}
                    className=""
                    variant="secondary"
                    width={280}
                    placeholder={t('signIn:email')}
                  />
                )}
              />
            </div>
            <div className="signIn-password__input">
              <Controller
                control={control}
                name="pass"
                render={({ field: { onChange, value } }) => (
                  <Input
                    type={'password'}
                    onChange={onChange}
                    value={value}
                    className=""
                    variant="secondary"
                    width={280}
                    placeholder={t('signIn:password')}
                  />
                )}
              />
            </div>
            <div className="signIn-rememberMe__wrapper">
              <p>{t('signIn:rememberMe')}</p>
              <Controller
                control={control}
                name="rememberMe"
                render={({ field: { onChange, value } }) => (
                  <CheckBox
                    width={20}
                    height={20}
                    style={{ marginRight: 10 }}
                    checked={value}
                    onChangeHandler={onChange}
                  />
                )}
              />
            </div>
            <div className="signIn-button">
              <Button fontSize={18} height={40} width={236} variant="primary">
                {t('signIn:button')}
              </Button>
            </div>
          </form>
          <p className="signIn-forgetPass">{t('signIn:forgetPass')}</p>
        </div>
      </div>
      {loginStatus === LoadingState.ERROR && (
        <div className="signIn-alert">
          <Alert width={651} message={t('signIn:alert.error')} variant="danger" />
        </div>
      )}

      {loginStatus === LoadingState.SUCCESS && (
        <div className="signIn-alert">
          <Alert width={651} message={t('signIn:alert.success')} variant="success" />
        </div>
      )}
    </AuthTemplate>
  );
};
