import React from 'react';
import { Accordion } from 'byh-components';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getOthersOptions } from '../../../../Store/ducks/advert/advertSelector';
import { translateSpareWheel, translateSuspention } from '../../../../services/carTranslators';
import './CarEquipment.scss';
export const Other = () => {
  const { t } = useTranslation();
  const other = useSelector(getOthersOptions);

  if (!other) {
    return null;
  }

  return (
    <div style={{ marginBottom: 20 }}>
      <Accordion width={770} title={t('advertPage:options.other.label')}>
        <ul className="advert-accordion__content">
          {other.suspention && <li> {translateSuspention(other.suspention)} </li>}
          {other.spareWheel && <li> {translateSpareWheel(other.spareWheel)} </li>}
          {other.towbar && <li>{t('advertPage:options.comfort.towbar')}</li>}
          {other.crankcaseProtection && (
            <li>{t('advertPage:options.other.crankcaseProtection')}</li>
          )}
        </ul>
      </Accordion>
    </div>
  );
};
