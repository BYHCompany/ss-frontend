import { Button, ImageComponent, Textarea, Title } from 'byh-components';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useTranslation } from 'react-i18next';
import { Tags } from '../../../Components/Tags';
import { Tag } from '../../../Components/Tags/Tags/Tags';
import { AuthTemplate } from '../../../Templates/AuthTemplate';
import './About.scss';

const items = [
  {
    bg: '#fff',
    id: 'bmw',
    name: 'BMW',
  },
  {
    bg: '#fff',
    id: 'audi',
    name: 'Audi',
  },
  {
    bg: '#fff',
    id: 'porsche',
    name: 'Porsche',
  },
  {
    bg: '#fff',
    id: 'ferrari',
    name: 'Ferrari',
  },
  {
    bg: '#fff',
    id: 'mb',
    name: 'Mercedes-Benz',
  },
  {
    bg: 'red',
    id: 'tesla',
    name: 'Tesla',
  },
] as Tag[];

export const About = () => {
  const { control, handleSubmit } = useForm();
  const { t } = useTranslation();

  return (
    <AuthTemplate>
      <div className="signUpAbout__wrapper">
        <div>
          <Title className="signUpAbout__label" variant="primary" type="medium">
            {t('signUp:about.label')}
          </Title>
          <div className="signUpAbout__grid">
            <div className="signUpAbout__grid__left">
              <div className="signUpAbout__grid__photo">
                <ImageComponent
                  style={{ marginBottom: 10 }}
                  width={207}
                  height={207}
                  src="https://images.unsplash.com/photo-1623303702672-1429876c5caa?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=633&q=80"
                />
                <Button variant="primary" width={207} height={30}>
                  {t('signUp:about.addNewPhoto')}
                </Button>
              </div>
              <div className="signUpAbout__grid__location">
                <Title
                  style={{ marginBottom: 9 }}
                  customVariantColor="#000000"
                  variant="primary"
                  type="ultraSmall">
                  {t('signUp:about.location.label')}
                </Title>
                <Button variant="primary" width={115} height={40}>
                  {t('signUp:about.location.button')}
                </Button>
              </div>
            </div>
            <div className="signUpAbout__grid__right">
              <div className="signUpAbout__about">
                <p className="signUpAbout__about__text">{t('signUp:about.aboutMe.label')}</p>
                <Controller
                  control={control}
                  name="about"
                  render={({ field: { value, onChange } }) => (
                    <Textarea
                      variant="primary"
                      width={305}
                      height={166}
                      onInput={onChange}
                      value={value}
                      placeholder={t('signUp:about.aboutMe.placeholder')}></Textarea>
                  )}
                />
              </div>
              <div className="signUpAbout__about__favourite">
                <Title style={{ marginBottom: 12 }} type="ultraSmall" customVariantColor="#000000">
                  {t('signUp:about.favourite.label')}
                </Title>
                <Tags withButton tags={items} />
              </div>
            </div>
          </div>
        </div>
        <div className="signUpAbout__bot">
          <p className="signUpAbout__bot__descr">{t('signUp:about.info')}</p>
          <Button fontSize={18} variant="primary" height={40} width={236}>
            {t('signUp:about.button')}
          </Button>
        </div>
      </div>
    </AuthTemplate>
  );
};
