import { Button, CheckBox, Input, Title } from 'byh-components';
import React from 'react';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { AuthTemplate } from '../../../Templates/AuthTemplate';
import './SignIn.scss';
type InputType = {
  pass1: string;
  email: string;
  rememberMe: boolean;
};
export const SignIn = () => {
  const { handleSubmit, control } = useForm();
  const onSubmit: SubmitHandler<InputType> = (data: any) => console.log(data);
  return (
    <AuthTemplate>
      <div className="signIn__wrapper">
        <div className="signIn-content__wrapper">
          <Title variant="secondary" type="ultraLarge">
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
                    placeholder={'Электронная почта'}
                  />
                )}
              />
            </div>
            <div className="signIn-password__input">
              <Controller
                control={control}
                name="password"
                render={({ field: { onChange, value } }) => (
                  <Input
                    onChange={onChange}
                    value={value}
                    className=""
                    variant="secondary"
                    width={280}
                    placeholder={'Пароль'}
                  />
                )}
              />
            </div>
            <div className="signIn-rememberMe__wrapper">
              <p>Запомнить Меня</p>
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
                Продолжить
              </Button>
            </div>
          </form>
          <p className="signIn-forgetPass">Забыли пароль?</p>
        </div>
      </div>
    </AuthTemplate>
  );
};
