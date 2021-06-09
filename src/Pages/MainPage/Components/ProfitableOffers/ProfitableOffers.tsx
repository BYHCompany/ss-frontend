import { Button, Title } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { biggerAdvertData } from '../../../../assets/advertPreviewData';
import { AdvertPreview } from '../../../../Components/AdvertPreview';

import './ProfitableOffers.scss';
export const ProfitableOffers = () => {
  const { t } = useTranslation();
  return (
    <div data-testId="profitableOffers-wrapper">
      <Title style={{ marginBottom: 20 }} type="large" variant="primary">
        {t('mainPage:profitableOffers')}
      </Title>
      <div className="profitable-offers__advert-preview__wrapper">
        {biggerAdvertData.map((props) => (
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
      <div className="profitable-offers__button">
        <Button height={60} width={570} fontSize={40} variant="primary">
          {t('mainPage:buttons.showMore')}
        </Button>
      </div>
    </div>
  );
};
