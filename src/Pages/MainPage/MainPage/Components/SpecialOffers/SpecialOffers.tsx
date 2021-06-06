import { Button, Title } from 'byh-components';
import React from 'react';
import { advertData } from '../../../../../assets/advertPreviewData';
import './SpecialOffers.scss';
import { AdvertPreview } from '../../../../../Components/AdvertPreview';

export const SpecialOffers = () => {
  return (
    <div>
      <Title text="Предложения специально для Вас" type="large" variant="primary" />
      <div className="special-offers__advert-preview__wrapper">
        {advertData.map((props) => (
          <div style={{ marginBottom: 35 }}>
            <AdvertPreview
              id={props.id}
              photo={props.photo}
              price={props.price}
              title={props.title}
              year={props.year}
              isElectric={props.isElectric}
              isInTrending={props.isInTrending}
            />
          </div>
        ))}
      </div>
      <div className="special-offers__button">
        <Button label="Показать больше" height={60} width={570} fontSize={40} variant="primary" />
      </div>
    </div>
  );
};
