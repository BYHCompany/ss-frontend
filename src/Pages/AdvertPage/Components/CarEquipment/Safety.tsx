import React from 'react';
import { Accordion } from 'byh-components';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getSafetyOptions } from '../../../../Store/ducks/advert/advertSelector';
import {
  translateAirbags,
  translateIsofix,
  translateSupportSystems,
} from '../../../../services/carTranslators';

export const Safety = () => {
  const { t } = useTranslation();
  const safety = useSelector(getSafetyOptions);

  if (!safety) {
    return null;
  }

  return (
    <div>
      <Accordion width={770} title={t('advertPage:options.safety.label')}>
        <ul>
          {safety.airbags && translateAirbags(safety.airbags).map((e) => <li key={e}>{e}</li>)}
          {safety.airbags &&
            translateIsofix(safety.isofix).map((e) => (
              <li key={e}> {`${t('advertPage:options.safety.isofix.label')}: ${e}`}</li>
            ))}
          {safety.airbags &&
            translateSupportSystems(safety.supportSystems).map((e) => <li key={e}>{e}</li>)}
          {safety.abs && <li>{t('advertPage:options.safety.abs')}</li>}
          {safety.esp && <li>{t('advertPage:options.safety.esp')}</li>}
          {safety.peassureSensor && <li>{t('advertPage:options.safety.peassureSensor')}</li>}
          {safety.rearDoorBlock && <li>{t('advertPage:options.safety.rearDoorBlock')}</li>}
          {safety.armoredBody && <li>{t('advertPage:options.safety.armoredBody')}</li>}
        </ul>
      </Accordion>
    </div>
  );
};
