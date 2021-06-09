import { Button, DescriptionList, Title, ImageComponent } from 'byh-components';
import React from 'react';
import {} from 'byh-components';
import { BiMessageDetail } from 'react-icons/bi';
import { FaPhoneAlt } from 'react-icons/fa';
import './AdvertInfo.scss';

export const AdvertInfo = () => {
  const [isHidden, setIsHidden] = React.useState(true);

  const descriptionData = [
    { 'Год выпуска': 2020 },
    { Пробег: '185 км' },
    { Привод: 'Полный' },
    { Руль: 'Левый' },
    { Двигатель: 'Дизель 3.0' },
    { Коробка: 'Механическая' },
    { Мощность: '55 л.c' },
    { Кузов: 'Внедорожник 5 дв.' },
    { Налог: 'Полный' },
    { VIN: 'Полный' },
    { 'Гос.номер авто': 'Полный' },
  ];

  const handleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="advert-info__container">
      <div className="advert-info__wrapper">
        <Title className="advert-info__price-title" variant="primary">
          230 300$
        </Title>
        {descriptionData.map((description, index) => {
          const length = descriptionData.length;
          return (
            <React.Fragment key={index}>
              <DescriptionList
                width={370}
                handleHide={handleHidden}
                hide={index === length - 1 || index === length - 2 ? isHidden : false}
                obj={description}
              />
            </React.Fragment>
          );
        })}
        <div className={'advert-info__account-info__wrapper'}>
          <div className="advert-info__account-info__photo">
            <ImageComponent
              height={121}
              width={121}
              src={
                'https://images.unsplash.com/photo-1622495892289-acbdc7414c59?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=989&q=80'
              }
            />
          </div>
          <div style={{ width: '100%' }}>
            <div className="advert-info__account-info__fullName">
              <p>Имя Фамилия</p>
              <p>25 Лет</p>
            </div>
            <div className="advert-info__account-info__buttons">
              <Button
                variant="primary"
                style={{ marginBottom: 7 }}
                height={41}
                width={234}
                endIcon={<BiMessageDetail />}>
                Связаться
              </Button>
              <Button variant="primary" height={41} width={234} endIcon={<FaPhoneAlt />}>
                Показать номер
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
