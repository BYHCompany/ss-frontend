import { CheckBox, Dropdown, Input, Paper, Title } from 'byh-components';
import React from 'react';
import { AuthTemplate } from '../../../Templates/AuthTemplate';
import './SignIn.scss';
import { FaUserAlt } from 'react-icons/fa';

const items = [
  {
    id: 'Latvia',
    value: 'lv',
    label: 'Латвия',
  },
  {
    id: 'Latvia',
    value: 'lv',
    label: 'Латвия',
  },
  {
    id: 'Latvia',
    value: 'lv',
    label: 'Латвия',
  },
  {
    id: 'Latvia',
    value: 'lv',
    label: 'Латвия',
  },
  {
    id: 'Latvia',
    value: 'lv',
    label: 'Латвия',
  },
  {
    id: 'Latvia',
    value: 'lv',
    label: 'Латвия',
  },
];

export const SignIn = () => {
  return (
    <AuthTemplate>
      <div className="signIn__contentWrapper">
        <Title style={{ marginBottom: 38 }} variant="primary">
          Выберать тип аккаунта
        </Title>
        <Paper
          display="flex"
          style={{ width: '100%' }}
          height={168}
          className="signIn__privatePerson">
          <FaUserAlt className="signIn__privatePerson__icon" />
          <Title type="medium" variant="secondary">
            Частное лицо
          </Title>
          <p className="signIn__privatePerson__descr">
            Выберите это, если Вы являетесь частным лицом
          </p>
        </Paper>
        <form className="signIn__content__inputWrapper">
          <div className="signIn__content__inputLeftSide">
            <div>
              <Input
                className="signIn__content__input"
                variant="secondary"
                width={280}
                value=""
                callback={() => {}}
                placeholder="Имя*"
              />
              <Input
                className="signIn__content__input"
                variant="secondary"
                width={280}
                value=""
                callback={() => {}}
                placeholder="Фамилия*"
              />
              <Input
                className="signIn__content__input"
                variant="secondary"
                width={280}
                value=""
                callback={() => {}}
                placeholder="Электронная почта*"
              />
              <Input
                className="signIn__content__input"
                variant="secondary"
                width={280}
                value=""
                callback={() => {}}
                placeholder="Пароль*"
              />
              <Input
                className="signIn__content__input"
                variant="secondary"
                width={280}
                value=""
                callback={() => {}}
                placeholder="Подтверждение пароля*"
              />
              <p className="signIn__content__info">* - обязательное поле</p>
            </div>
            <CheckBox checked={false} onChangeHandler={() => {}} />
          </div>
          <div className="signIn__content__inputRightSide">
            <Dropdown
              style={{ marginBottom: 15 }}
              itemsScrollHeight={200}
              variant="secondary"
              width={280}
              items={items}
              label="Страна*"
              callback={() => {}}
            />
            <Input
              className="signIn__content__input"
              startIcon={<p style={{ fontSize: 14, fontWeight: 700 }}>+371</p>}
              variant="secondary"
              width={280}
              value=""
              callback={() => {}}
              placeholder="Номер телефона*"
            />
            <Input
              className="signIn__content__input"
              variant="secondary"
              width={280}
              value=""
              callback={() => {}}
              placeholder="Дата рождения - DD / MM / YYYY"
            />
            <div className="signIn__content__passValid">
              Пароль должен содержать как минимум
              <span className="signIn__content__mark"> Заглавную букву</span> и
              <span className="signIn__content__mark"> любую цифру</span>
            </div>
            <div className="signIn__content__passValid red passNotMatch">Пароли не совпадают</div>
          </div>
        </form>
      </div>
    </AuthTemplate>
  );
};
