import { Button, Title } from 'byh-components';
import React from 'react';
import { biggerAdvertData } from '../../../../../assets/advertPreviewData';
import { AdvertPreview } from '../../../../../Components/AdvertPreview';
import './ProfitableOffers.scss';
export const ProfitableOffers = () => {
  return (
    <div>
      <Title type="large" text="Не пропусти эти выгодные предложения" variant="primary" />
      <div className="profitable-offers__advert-preview__wrapper">
        {biggerAdvertData.map((props) => (
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
      <div className="profitable-offers__button">
        <Button label="Показать больше" height={60} width={570} fontSize={40} variant="primary" />
      </div>
    </div>
  );
};
