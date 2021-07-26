import { DescriptionList, ImageComponent, Paper, Title } from 'byh-components';
import React from 'react';
import {
  translateEngineType,
  translateGearboxType,
  translateTransmitionType,
} from '../../../services/carTranslators';
import { priceFormatter } from '../../../services/priceFormaters';
import './BigAdvertPreview.scss';
import { BigAdvertPreviewProps } from './BigAdvertPreviewTypes';
import { BsPlug } from 'react-icons/bs';
import { BiTrendingUp } from 'react-icons/bi';
import { NavLink } from 'react-router-dom';
import { Trans, useTranslation } from 'react-i18next';

export const BigAdvertPreview: React.FC<BigAdvertPreviewProps> = ({ car, advertId }) => {
  const { t } = useTranslation();
  if (!car) {
    return null;
  }

  const year = car.year;
  const millage = car.millage;

  return (
    <NavLink style={{ textDecoration: 'none' }} to={`/advert/${advertId}`}>
      <Paper
        boxShadow={false}
        width={1170}
        height={214}
        display={'flex'}
        className={'bigAdvertPreview__wrapper'}>
        <div style={{ display: 'flex', marginRight: 18 }}>
          <ImageComponent style={{ marginRight: 10 }} src={car.photo[0]} width={286} height={185} />
          <div className={'bigAdvertPreview__smallImg-wrapper'}>
            <ImageComponent src={car.photo[1]} width={86} height={55} />
            <ImageComponent src={car.photo[2]} width={86} height={55} />
            <ImageComponent src={car.photo[3]} width={86} height={55} />
          </div>
          {/* <div className="bigAdertPreview__content__tags">
            {car.engineType === 'electric' && (
              <Paper
                display={'flex'}
                className="bigAdertPreview__content__tagWrapper bigAdertPreview__content__boostTag"
                width={153}
                height={26}
                customBgColor="#00A3FF">
                <BsPlug className="bigAdv5tPreview__content__tagIcon" />
                <p className="bigAdertPreview__content___tagText">Электрокар</p>
              </Paper>
            )}
            <Paper
              display={'flex'}
              className="bigAdertPreview__content__tagWrapper bigAdertPreview__content__boostTag"
              width={150}
              height={26}
              customBgColor="#4FFFAA">
              <BiTrendingUp className="bigAdvertPreview__content__tagIcon" />
              <p className="bigAdertPreview__content___tagText">Выгодно</p>
            </Paper>
          </div> */}
        </div>
        <div className="bigAdertPreview__content">
          <div className="bigAdertPreview__title-wrapper">
            <Title type={'ultraSmall'} variant="primary">
              {car.make} {car.model}
            </Title>
            <Title type={'ultraSmall'} variant="primary">
              {priceFormatter(car.price)}
            </Title>
          </div>
          <div style={{ height: '100%' }}>
            <DescriptionList
              style={{ marginBottom: 5 }}
              fontSize={20}
              width={700}
              header={t('advertPage:year.year')}
              description={<Trans i18nKey={'advertPage:year.value'}> {{ year }} </Trans>}
            />

            <DescriptionList
              fontSize={20}
              style={{ marginBottom: 5 }}
              width={700}
              header={t('advertPage:millage.millage')}
              description={<Trans i18nKey={'advertPage:millage.value'}> {{ millage }} </Trans>}
            />
            <DescriptionList
              fontSize={20}
              style={{ marginBottom: 5 }}
              header={t('advertPage:transmission.transmission')}
              width={700}
              description={translateTransmitionType(car.transmission)}
            />

            <DescriptionList
              fontSize={20}
              width={700}
              style={{ marginBottom: 5 }}
              header={t('advertPage:engine.engine')}
              description={`${translateEngineType(car.engineType)} ${car.engineVolume}`}
            />
            <DescriptionList
              fontSize={20}
              style={{ marginBottom: 5 }}
              width={700}
              header={t('advertPage:gearBox.gearBox')}
              description={translateGearboxType(car.gearbox)}
            />
          </div>
        </div>
      </Paper>
    </NavLink>
  );
};
