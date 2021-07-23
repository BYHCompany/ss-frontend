import { Button, Title } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from 'react-router-dom';
import { biggerAdvertData } from '../../../../assets/advertPreviewData';
import { AdvertPreview } from '../../../../Components/AdvertPreview';

import './ProfitableOffers.scss';
export const ProfitableOffers = () => {
  const { t } = useTranslation();
  return (
    <div data-testid="profitableOffers-wrapper">
      <Title style={{ marginBottom: 20 }} type="medium" variant="primary">
        {t('mainPage:profitableOffers')}
      </Title>
      <div className="profitable-offers__advert-preview__wrapper">
        <NavLink to="advert/1">
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
        </NavLink>
      </div>
      <div className="profitable-offers__button">
        <Button height={45} width={370} fontSize={26} variant="primary">
          {t('mainPage:buttons.showMore')}
        </Button>
      </div>
    </div>
  );
};
