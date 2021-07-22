import { Title } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getAllCarOptions } from '../../../../Store/ducks/advert/advertSelector';
import { OverviewOptions } from './Overview';
import { InteriorOptions } from './Interior';
import { ExteriorOptions } from './Exterior';
import { AntiTheftProtectionOptions } from './AntiTheftProtection';
import { EntertainmentSystem } from './EntertainmentSystem';
import { Safety } from './Safety';
import { Comfort } from './Comfort';
import { Other } from './Other';

export const CarEquipment = () => {
  const { t } = useTranslation();
  const carOptions = useSelector(getAllCarOptions);

  if (!carOptions) {
    return null;
  }

  return (
    <div>
      <Title variant="primary" type="ultraSmall" style={{ marginBottom: 10 }}>
        {t('advertPage:carEquipment')}
      </Title>
      <OverviewOptions />
      <InteriorOptions />
      <ExteriorOptions />
      <AntiTheftProtectionOptions />
      <EntertainmentSystem />
      <Safety />
      <Comfort />
      <Other />
    </div>
  );
};
