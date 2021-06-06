import { Button, Title } from 'byh-components';
import React from 'react';
import { advertData } from '../../../../../assets/advertPreviewData';
import './SpecialOffers.scss';
import { AdvertPreview } from '../../../../../Components/AdvertPreview';

export const SpecialOffers = () => {
  return (
    <div>
      <Title text="Предложения специально для Вас" type="large" variant="primary" />
      <div className="advert-preview__wrapper">
        {advertData.map((props) => (
          <AdvertPreview
            id={props.id}
            photo={props.photo}
            price={props.price}
            title={props.title}
            year={props.year}
            isElectric={props.isElectric}
            isInTrending={props.isInTrending}
          />
        ))}
      </div>

      <Button label="Показать больше" height={60} width={570} variant="primary" />
    </div>
  );
};
