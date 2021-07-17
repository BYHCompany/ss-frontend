import { Accordion } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const AntiTheftProtectionOptions = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Accordion width={770} title={t('advertPage:options.antiTheftProtection.label')}>
        <ul>
          <li>
            {`${t('advertPage:options.antiTheftProtection.signaling.label')}:
         
          `}
          </li>
        </ul>
      </Accordion>
    </div>
  );
};
