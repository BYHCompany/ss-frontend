import React from 'react';
import { Accordion } from 'byh-components';
import { useTranslation } from 'react-i18next';
import { translateRimsType } from '../../../../services/carTranslators';
import { useSelector } from 'react-redux';
import { getExteriorOptions } from '../../../../Store/ducks/advert/advertSelector';
import './CarEquipment.scss';
export const ExteriorOptions = () => {
  const { t } = useTranslation();
  const exterior = useSelector(getExteriorOptions);

  if (!exterior) {
    return null;
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <Accordion width={770} title={t('advertPage:options.exterior.label')}>
        <ul className="advert-accordion__content">
          <li>
            {`${t('advertPage:options.exterior.rimsType.label')}:
          ${translateRimsType(exterior.rimsType)}
          `}
          </li>
          <li>
            {`${t('advertPage:options.exterior.rimsSize')}:
          ${exterior.rimsSize}
          `}
          </li>

          {exterior.twoBodyColors && <li>{t('advertPage:options.exterior.twoBodyColors')}</li>}
          {exterior.airbrush && <li>{t('advertPage:options.exterior.airbrush')}</li>}
          {exterior.decorateMoldings && (
            <li>{t('advertPage:options.exterior.decorateMoldings')}</li>
          )}
          {exterior.roofRails && <li>{t('advertPage:options.exterior.roofRails')}</li>}
        </ul>
      </Accordion>
    </div>
  );
};
