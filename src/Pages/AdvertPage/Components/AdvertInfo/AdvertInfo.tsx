import { DescriptionList, Title } from 'byh-components';
import React from 'react';

import './AdvertInfo.scss';

import {
  translateBodyType,
  translateEngineType,
  translateGearboxType,
  translateSteeringWheel,
  translateTransmitionType,
} from '../../../../services/carTranslators';
import { Trans, useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getCarMainInfo } from '../../../../Store/ducks/advert/advertSelector';
import { AdvertUserInfo } from './AdvertUserInfo';

export const AdvertInfo = () => {
  const descriptionData = useSelector(getCarMainInfo);
  const [isHidden, setIsHidden] = React.useState(true);
  const { t } = useTranslation();
  if (!descriptionData) {
    return null;
  }
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
          fontSize={22}
          width={370}
          handleHide={handleHidden}
          header={t('advertPage:year.year')}
          description={<Trans i18nKey={'advertPage:year.value'}> {{ year }} </Trans>}
        />

        <DescriptionList
          fontSize={22}
          width={370}
          handleHide={handleHidden}
          header={t('advertPage:millage.millage')}
          description={<Trans i18nKey={'advertPage:millage.value'}> {{ millage }} </Trans>}
        />
        <DescriptionList
          fontSize={22}
          header={t('advertPage:transmission.transmission')}
          width={370}
          handleHide={handleHidden}
          description={translateTransmitionType(descriptionData.transmission)}
        />
        <DescriptionList
          fontSize={22}
          width={370}
          handleHide={handleHidden}
          header={t('advertPage:steeringWheel.steeringWheel')}
          description={translateSteeringWheel(descriptionData.steeringWheel)}
        />
        <DescriptionList
          fontSize={22}
          width={370}
          handleHide={handleHidden}
          header={t('advertPage:engine.engine')}
          description={translateEngineType(descriptionData.engineType)}
        />
        <DescriptionList
          fontSize={22}
          width={370}
          handleHide={handleHidden}
          header={t('advertPage:gearBox.gearBox')}
          description={translateGearboxType(descriptionData.gearbox)}
        />
        <DescriptionList
          width={370}
          fontSize={22}
          handleHide={handleHidden}
          header={t('advertPage:power.power')}
          description={<Trans i18nKey={'advertPage:power.value'}> {{ power }} </Trans>}
        />
        <DescriptionList
          width={370}
          fontSize={22}
          handleHide={handleHidden}
          header={t('advertPage:carBody.carBody')}
          description={translateBodyType(descriptionData.carBody)}
        />
        <DescriptionList
          width={370}
          fontSize={22}
          handleHide={handleHidden}
          header={t('advertPage:tax.tax')}
          description={<Trans i18nKey={'advertPage:tax.value'}> {{ tax }} </Trans>}
        />
        <DescriptionList
          showButtonText={t('advertPage:buttons.show')}
          width={370}
          fontSize={22}
          handleHide={handleHidden}
          header="VIN"
          hide={isHidden}
          description={descriptionData.vin}
        />
        <DescriptionList
          width={370}
          fontSize={22}
          showButtonText={t('advertPage:buttons.show')}
          handleHide={handleHidden}
          header={t('advertPage:carLicensePlate')}
          hide={isHidden}
          description={descriptionData.carLicensePlate}
        />

        <AdvertUserInfo />
      </div>
    </div>
  );
};
