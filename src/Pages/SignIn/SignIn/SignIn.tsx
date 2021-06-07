import { Input, Paper, Title } from 'byh-components';
import React from 'react';
import { AuthTemplate } from '../../../Templates/AuthTemplate';
import './SignIn.scss';
import { FaUserAlt } from 'react-icons/fa';

export const SignIn = () => {
  return (
    <AuthTemplate>
      <div className="signIn__contentWrapper">
        <Title style={{ marginBottom: 38 }} variant="primary" text="Выберать тип аккаунта" />
        <Paper
          display="flex"
          style={{ width: '100%' }}
          height={168}
          className="signIn__privatePerson">
          <FaUserAlt className="signIn__privatePerson__icon" />
          <Title text="Частное лицо" type="medium" variant="secondary" />
          <p className="signIn__privatePerson__descr">
            Выберите это, если Вы являетесь частным лицом{' '}
          </p>
        </Paper>
        <div className="signIn__content__inputWrapper">
          <Input value="" callback={() => {}} placeholder="Имя*" />
        </div>
      </div>
    </AuthTemplate>
  );
};
