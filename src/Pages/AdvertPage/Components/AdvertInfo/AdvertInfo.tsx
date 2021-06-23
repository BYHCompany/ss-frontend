import { Button, DescriptionList, Title, ImageComponent } from 'byh-components';
import React from 'react';
import { BiMessageDetail } from 'react-icons/bi';
import { FaPhoneAlt } from 'react-icons/fa';
import './AdvertInfo.scss';
import { AdvertInfoProps } from '../../../../GlobalTypes/carTypes';
import {
  translateBodyType,
  translateEngineType,
  translateGearboxType,
  translateSteeringWheel,
  translateTransmitionType,
} from '../../../../services/carTranslators';
import { Trans, useTranslation } from 'react-i18next';

const descriptionData = {
  price: 230000,
  year: 2020,
  millage: 185,
  transmissionType: 'AWD',
  steeringWheel: 'left',
  engineType: 'electric',
  gearbox: 'automatic',
  power: 55,
  carBody: 'sedan',
  state: 'used',
  tax: 350,
  vinCode: 'Полный',
  carLicensePlate: 'Полный',
} as AdvertInfoProps;
export const AdvertInfo = () => {
  const [isHidden, setIsHidden] = React.useState(true);
  const { t } = useTranslation();
  const millage = descriptionData.millage;
  const year = descriptionData.year;
  const power = descriptionData.power;
  const tax = descriptionData.tax;

  const handleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div className="advert-info__container">
      <div className="advert-info__wrapper">
        <Title className="advert-info__price-title" variant="primary">
          {descriptionData.price}$
        </Title>

        <DescriptionList
          width={370}
          handleHide={handleHidden}
          header={t('advertPage:year.year')}
          description={<Trans i18nKey={'advertPage:year.value'}> {{ year }} </Trans>}
        />

        <DescriptionList
          width={370}
          handleHide={handleHidden}
          header={t('advertPage:millage.millage')}
          description={<Trans i18nKey={'advertPage:millage.value'}> {{ millage }} </Trans>}
        />
        <DescriptionList
          header={t('advertPage:transmission.transmission')}
          width={370}
          handleHide={handleHidden}
          description={translateTransmitionType(descriptionData.transmissionType)}
        />
        <DescriptionList
          width={370}
          handleHide={handleHidden}
          header={t('advertPage:steeringWheel.steeringWheel')}
          description={translateSteeringWheel(descriptionData.steeringWheel)}
        />
        <DescriptionList
          width={370}
          handleHide={handleHidden}
          header={t('advertPage:engine.engine')}
          description={translateEngineType(descriptionData.engineType)}
        />
        <DescriptionList
          width={370}
          handleHide={handleHidden}
          header={t('advertPage:gearBox.gearBox')}
          description={translateGearboxType(descriptionData.gearbox)}
        />
        <DescriptionList
          width={370}
          handleHide={handleHidden}
          header={t('advertPage:power.power')}
          description={<Trans i18nKey={'advertPage:power.value'}> {{ power }} </Trans>}
        />
        <DescriptionList
          width={370}
          handleHide={handleHidden}
          header={t('advertPage:carBody.carBody')}
          description={translateBodyType(descriptionData.carBody)}
        />
        <DescriptionList
          width={370}
          handleHide={handleHidden}
          header={t('advertPage:tax.tax')}
          description={<Trans i18nKey={'advertPage:tax.value'}> {{ tax }} </Trans>}
        />
        <DescriptionList
          showButtonText={t('advertPage:buttons.show')}
          width={370}
          handleHide={handleHidden}
          header="VIN"
          hide={isHidden}
          description={descriptionData.vinCode}
        />
        <DescriptionList
          width={370}
          showButtonText={t('advertPage:buttons.show')}
          handleHide={handleHidden}
          header={t('advertPage:carLicensePlate')}
          hide={isHidden}
          description={descriptionData.carLicensePlate}
        />
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
                {t('advertPage:buttons.contact')}
              </Button>
              <Button variant="primary" height={41} width={234} endIcon={<FaPhoneAlt />}>
                {t('advertPage:buttons.showNumber')}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
