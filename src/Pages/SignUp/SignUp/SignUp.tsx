import { Button, CheckBox, Dropdown, Input, Paper, Title } from 'byh-components';
import React from 'react';
import { AuthTemplate } from '../../../Templates/AuthTemplate';
import './SignUp.scss';
import { FaUserAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import { Trans, useTranslation } from 'react-i18next';

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
  polict: boolean;
};

export const SignUp = () => {
  const { t } = useTranslation();
  // const [isPrivatePerson, setIsPrivatePerson] = React.useState(true);
  const { handleSubmit, control } = useForm();

  const onSubmit: SubmitHandler<Inputs> = (data: any) => console.log(data);

  return (
    <AuthTemplate>
      <div className="signUp__contentWrapper">
        <Title style={{ marginBottom: 38 }} variant="primary">
          {t('signUp:form.selectAccountType')}
        </Title>
        <Paper
          display="flex"
          style={{ width: '100%' }}
          height={168}
          className="signUp__privatePerson">
          <FaUserAlt className="signUp__privatePerson__icon" />
          <Title type="medium" variant="secondary">
            {t('signUp:form.types.private.text')}
          </Title>
          <p className="signUp__privatePerson__descr">{t('signUp:form.types.private.descr')}</p>
        </Paper>
        <form onSubmit={handleSubmit(onSubmit)} className="signUp__content__inputWrapper">
          <div className="signUp__content__inputSide">
            <div>
              <Controller
                control={control}
                name="name"
                render={({ field: { onChange, value } }) => (
                  <Input
                    onChange={onChange}
                    value={value}
                    className="signUp__content__input"
                    variant="secondary"
                    width={280}
                    placeholder={t('signUp:form.inputs.name')}
                  />
                )}
              />
              <Controller
                control={control}
                name="surname"
                render={({ field: { onChange, value } }) => (
                  <Input
                    className="signUp__content__input"
                    variant="secondary"
                    width={280}
                    onChange={onChange}
                    value={value}
                    placeholder={t('signUp:form.inputs.surname')}
                  />
                )}
              />
              <Controller
                control={control}
                name="email"
                render={({ field: { onChange, value } }) => (
                  <Input
                    className="signUp__content__input"
                    variant="secondary"
                    width={280}
                    value={value}
                    onChange={onChange}
                    placeholder={t('signUp:form.inputs.email')}
                  />
                )}
              />
              <Controller
                control={control}
                name="pass1"
                render={({ field: { onChange, value } }) => (
                  <Input
                    className="signUp__content__input"
                    variant="secondary"
                    width={280}
                    type="password"
                    onChange={onChange}
                    value={value}
                    placeholder={t('signUp:form.inputs.pass1')}
                  />
                )}
              />
              <Controller
                control={control}
                name="pass2"
                render={({ field: { onChange, value } }) => (
                  <Input
                    className="signUp__content__input"
                    variant="secondary"
                    width={280}
                    type="password"
                    onChange={onChange}
                    value={value}
                    placeholder={t('signUp:form.inputs.pass2')}
                  />
                )}
              />
              <p className="signUp__content__info">{t('signUp:form.required')}</p>
            </div>
            <div className="signUp__content__checkboxWrap">
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
              <p className="signUp__content__checkboxDescr">
                <Trans i18nKey="signUp:form.private">
                  Согласен и принимаю
                  <Link to="" className="signUp__text--underline">
                    Политику конфиденциальности
                  </Link>
                </Trans>
              </p>
            </div>
          </div>
          <div className="signUp__content__inputSide">
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
                    label={t('signUp:form.inputs.country')}
                    callback={onChange}
                  />
                )}
              />
              <Controller
                control={control}
                name="phone"
                render={({ field: { onChange, value } }) => (
                  <Input
                    className="signUp__content__input"
                    startIcon={<p style={{ fontSize: 14, fontWeight: 700 }}>+371</p>}
                    variant="secondary"
                    width={280}
                    type="tel"
                    onChange={onChange}
                    value={value}
                    placeholder={t('signUp:form.inputs.phone')}
                  />
                )}
              />
              <Controller
                control={control}
                name="bd"
                render={({ field: { onChange, value } }) => (
                  <Input
                    className="signUp__content__input"
                    variant="secondary"
                    width={280}
                    value={value}
                    onChange={onChange}
                    placeholder={t('signUp:form.inputs.bd')}
                  />
                )}
              />

              <div className="signUp__content__passValid">
                <Trans i18nKey="signUp:form.notValidPass">
                  Пароль должен содержать как минимум
                  <span className="signUp__content__mark"> Заглавную букву</span> и
                  <span className="signUp__content__mark"> любую цифру</span>
                </Trans>
              </div>

              <div className="signUp__content__passValid red passNotMatch">
                {t('signUp:form.notSimilar')}
              </div>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button variant="primary" width={236} height={40}>
                {t('signUp:form.continue')}
              </Button>
            </div>
          </div>
        </form>
      </div>
    </AuthTemplate>
  );
};
