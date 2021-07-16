import { Accordion, Title } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getAllCarOptions } from '../../../../Store/ducks/advert/advertSelector';

export const CarEquipment = () => {
  const { t } = useTranslation();
  const carOptions = useSelector(getAllCarOptions);
  return (
    <div>
      <Title variant="primary" type="small" style={{ marginBottom: 10 }}>
        {t('advertPage:carEquipment')}
      </Title>
      <Accordion width={770} title="Обзор">
        <ul>
          <li></li>
        </ul>
      </Accordion>
    </div>
  );
};
