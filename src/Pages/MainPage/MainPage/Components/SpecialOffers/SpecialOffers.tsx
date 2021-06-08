import { Button, Title } from 'byh-components';
import React from 'react';
import { advertData } from '../../../../../assets/advertPreviewData';
import './SpecialOffers.scss';
import { AdvertPreview } from '../../../../../Components/AdvertPreview';

export const SpecialOffers = () => {
  return (
    <div>
      <Title style={{ marginBottom: 20 }} type="large" variant="primary">
        Предложения специально для Вас
      </Title>
      <div className="special-offers__advert-preview__wrapper">
        {advertData.map((props) => (
          <div key={props.id} style={{ marginBottom: 35 }}>
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
        <Button height={60} width={570} fontSize={40} variant="primary">
          Показать больше
        </Button>
      </div>
    </div>
  );
};
