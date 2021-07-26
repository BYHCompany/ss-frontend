import { Button, Title } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import './SpecialOffers.scss';
export const SpecialOffers = () => {
  const { t } = useTranslation();
  return (
    <div data-testid="SpecialOffers-wrapper">
      <Title style={{ marginBottom: 20 }} type="medium" variant="primary">
        {t('mainPage:specialOffersLabel')}
      </Title>
      <div className="special-offers__advert-preview__wrapper">
        {/* {advertData.map((props: any) => (
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
        ))} */}
      </div>
      <div className="special-offers__button">
        <Button height={45} width={370} fontSize={26} variant="primary">
          {t('mainPage:buttons.showMore')}
        </Button>
      </div>
    </div>
  );
};
