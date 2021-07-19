import { Accordion } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { translateSignaling } from '../../../../services/carTranslators';
import { getAntiTheftProtectionOptions } from '../../../../Store/ducks/advert/advertSelector';

export const AntiTheftProtectionOptions = () => {
  const antiTheftProtection = useSelector(getAntiTheftProtectionOptions);
  const { t } = useTranslation();

  if (!antiTheftProtection) {
    return null;
  }
  return (
    <div style={{ marginBottom: 20 }}>
      <Accordion width={770} title={t('advertPage:options.antiTheftProtection.label')}>
        <ul>
          {antiTheftProtection.signaling && (
            <li>
              {`${t('advertPage:options.antiTheftProtection.signaling.label')}:
            ${translateSignaling(antiTheftProtection.signaling)}
          `}
            </li>
          )}
          {antiTheftProtection.centralLock && (
            <li>{t('advertPage:options.antiTheftProtection.centralLock')}</li>
          )}
          {antiTheftProtection.interiorPenetration && (
            <li>{t('advertPage:options.antiTheftProtection.interiorPenetration')}</li>
          )}
          {antiTheftProtection.immobilizer && (
            <li>{t('advertPage:options.antiTheftProtection.immobilizer')}</li>
          )}
        </ul>
      </Accordion>
    </div>
  );
};
