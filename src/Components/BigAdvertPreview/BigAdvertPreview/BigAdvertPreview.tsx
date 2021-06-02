import { ImageComponent, Paper, Title } from 'byh-components';
import React from 'react';
import { convertKwToHP } from '../../../services/calculateHP';
import {
  translateBodyType,
  translateEngineType,
  translateGearboxType,
  translateStateType,
  translateTransmitionType,
} from '../../../services/carTranslators';
import { numberWithSeparators } from '../../../services/numberWithSeparator';
import { priceFormatter } from '../../../services/priceFormaters';
import './BigAdvertPreview.scss';
import { BigAdvertPreviewProps } from './BigAdvertPreviewTypes';

export const BigAdvertPreview: React.FC<BigAdvertPreviewProps> = ({ src, car }) => {
  return (
    <Paper className={'bigAdvertPreview__wrapper'}>
      <ImageComponent src={src} width={431} height={263} />
      <div className="bigAdertPreview__content">
        <div style={{ marginBottom: 15 }}>
          <div className="bigAdertPreview__content__leftRightPos">
            <Title text={car.name} />
            <p className="bigAdertPreview__content__year">{car.year} год</p>
          </div>
        </div>

        <div className="bigAdertPreview__content__leftRightPos">
          <p className="bigAdertPreview__content__param">
            {translateEngineType(car.engineType)} / {convertKwToHP(car.power)} л.с
          </p>
          <p className="bigAdertPreview__content__param bigAdertPreview__content__param--bold">
            {translateStateType(car.state)}
          </p>
        </div>
        <div className="bigAdertPreview__content__leftRightPos">
          <p className="bigAdertPreview__content__param">{translateGearboxType(car.gearbox)}</p>
          <p className="bigAdertPreview__content__param bigAdertPreview__content__param--bold">
            {numberWithSeparators(car.mileage)} км
          </p>
        </div>
        <div className="bigAdertPreview__content__leftRightPos">
          <p className="bigAdertPreview__content__param">{translateBodyType(car.carBody)}</p>
        </div>
        <div className="bigAdertPreview__content__leftRightPos">
          <p className="bigAdertPreview__content__param">
            {translateTransmitionType(car.transmissionType)}
          </p>
        </div>
        <div className="bigAdertPreview__content__tagsAndButtons">
          <Paper
            className="bigAdertPreview__content__priceWrapper"
            width={200}
            height={44}
            customBgColor="#072832">
            <p className="bigAdertPreview__content__price">{priceFormatter(car.price)}</p>
          </Paper>
        </div>
      </div>
    </Paper>
  );
};
