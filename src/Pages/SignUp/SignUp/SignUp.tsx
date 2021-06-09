import { Button, CheckBox, Dropdown, Input, Paper, Title } from 'byh-components';
import React from 'react';
import { AuthTemplate } from '../../../Templates/AuthTemplate';
import './SignUp.scss';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

const items = [
  {
    id: 'Lat1243via',
    value: 'lv',
    label: 'Латвия',
  },
  {
    id: 'Latddsfssvia',
    value: 'lv',
    label: 'Латвия',
  },
  {
    id: 'Latvlujia',
    value: 'lv',
    label: 'Латвия',
  },
  {
    id: 'Laxstvia',
    value: 'lv',
    label: 'Латвия',
  },
  {
    id: 'Latioplmvia',
    value: 'lv',
    label: 'Латвия',
  },
  {
    id: 'Lat23470via',
    value: 'lv',
    label: 'Латвия',
  },
];

type Inputs = {
  name: string;
  bd: string;
  phone: string;
  surname: string;
  pass1: string;
  pass2: string;
  email: string;
};

export const SignIn = () => {
  // const [isPrivatePerson, setIsPrivatePerson] = React.useState(true);
  const { handleSubmit, control } = useForm();

  const onSubmit: SubmitHandler<Inputs> = (data: any) => console.log(data);

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
        <form onSubmit={handleSubmit(onSubmit)} className="signIn__content__inputWrapper">
          <div className="signIn__content__inputSide">
            <div>
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value } }) => (
                  <Input
                    // @ts-ignore
                    onChange={onChange}
                    value={value}
                    className="signIn__content__input"
                    variant="secondary"
                    width={280}
                    placeholder="Имя*"
                  />
                )}
              />
              <Controller
                control={control}
                name="surname"
                render={({ field: { onChange, value } }) => (
                  <Input
                    className="signIn__content__input"
                    variant="secondary"
                    width={280}
                    onChange={onChange}
                    value={value}
                    placeholder="Фамилия*"
                  />
                )}
              />
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <Input
                    className="signIn__content__input"
                    variant="secondary"
                    width={280}
                    value={value}
                    onChange={onChange}
                    placeholder="Электронная почта*"
                  />
                )}
              />
              <Controller
                control={control}
                name="pass1"
                render={({ field: { onChange, value } }) => (
                  <Input
                    className="signIn__content__input"
                    variant="secondary"
                    width={280}
                    onChange={onChange}
                    value={value}
                    placeholder="Пароль*"
                  />
                )}
              />
              <Controller
                control={control}
                name="pass2"
                render={({ field: { onChange, value } }) => (
                  <Input
                    className="signIn__content__input"
                    variant="secondary"
                    width={280}
                    onChange={onChange}
                    value={value}
                    placeholder="Подтверждение пароля*"
                  />
                )}
              />
              <p className="signIn__content__info">* - обязательное поле</p>
            </div>
            <div className="signIn__content__checkboxWrap">
              <Controller
                control={control}
                name="policy"
                render={({ field: { onChange, value } }) => (
                  <CheckBox
                    width={32}
                    height={32}
                    style={{ marginRight: 10 }}
                    checked={value}
                    onChangeHandler={onChange}
                  />
                )}
              />

              <p className="signIn__content__checkboxDescr">
                Согласен и принимаю{' '}
                <Link to="" className="signIn__text--underline">
                  Политику конфиденциальности
                </Link>
              </p>
            </div>
          </div>
          <div className="signIn__content__inputSide">
            <div>
              <Controller
                control={control}
                name="country"
                render={({ field: { onChange } }) => (
                  <Dropdown
                    style={{ marginBottom: 15 }}
                    itemsScrollHeight={200}
                    variant="secondary"
                    width={280}
                    items={items}
                    label="Страна*"
                    callback={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="phone"
                render={({ field: { onChange, value } }) => (
                  <Input
                    className="signIn__content__input"
                    startIcon={<p style={{ fontSize: 14, fontWeight: 700 }}>+371</p>}
                    variant="secondary"
                    width={280}
                    onChange={onChange}
                    value={value}
                    placeholder="Номер телефона*"
                  />
                )}
              />
              <Controller
                control={control}
                name="bd"
                render={({ field: { onChange, value } }) => (
                  <Input
                    className="signIn__content__input"
                    variant="secondary"
                    width={280}
                    value={value}
                    onChange={onChange}
                    placeholder="Дата рождения - DD / MM / YYYY"
                  />
                )}
              />

              <div className="signIn__content__passValid">
                Пароль должен содержать как минимум
                <span className="signIn__content__mark"> Заглавную букву</span> и
                <span className="signIn__content__mark"> любую цифру</span>
              </div>
              <div className="signIn__content__passValid red passNotMatch">Пароли не совпадают</div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="primary" width={236} height={40}>
                Продолжить
              </Button>
            </div>
          </div>
        </form>
      </div>
    </AuthTemplate>
  );
};
