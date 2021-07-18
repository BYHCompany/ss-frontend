import React from 'react';
import { Accordion } from 'byh-components';
import { useTranslation } from 'react-i18next';

export const Other = () => {
  const { t } = useTranslation();

  return (
    <div>
      <Accordion width={770} title={t('advertPage:option.other.label')}>
        <ul>
          <li></li>
        </ul>
      </Accordion>
    </div>
  );
};
