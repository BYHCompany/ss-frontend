import { Accordion, Title } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';

export const CarEquipment = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Title variant="primary" type="small" style={{ marginBottom: 10 }}>
        {t('advertPage:carEquipment')}
      </Title>
      <Accordion width={770} title="Обзор">
        Обзор
      </Accordion>
    </div>
  );
};
