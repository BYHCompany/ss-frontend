import { Accordion } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { translateAudioSystem } from '../../../../services/carTranslators';
import { getEntertainmentSystemOptions } from '../../../../Store/ducks/advert/advertSelector';
import './CarEquipment.scss';
export const EntertainmentSystem = () => {
  const { t } = useTranslation();
  const entertainmentSystem = useSelector(getEntertainmentSystemOptions);
  if (!entertainmentSystem) {
    return null;
  }
  return (
    <div style={{ marginBottom: 20 }}>
      <Accordion width={770} title={t('advertPage:options.entertainmentSystem.label')}>
        <ul className="advert-accordion__content">
          <li>
            {`
          ${translateAudioSystem(entertainmentSystem.audioSystem)}
          `}
          </li>
          {entertainmentSystem.navi && <li>{t('advertPage:options.entertainmentSystem.navi')}</li>}
          {entertainmentSystem.backSeatsSystem && (
            <li>{t('advertPage:options.entertainmentSystem.backSeatsSystem')}</li>
          )}
          {entertainmentSystem.wirelessCharging && (
            <li>{t('advertPage:options.entertainmentSystem.wirelessCharging')}</li>
          )}
          {entertainmentSystem.twelveVPlug && (
            <li>{t('advertPage:options.entertainmentSystem.twelveVPlug')}</li>
          )}
          {entertainmentSystem.twoHundredTwenty && (
            <li>{t('advertPage:options.entertainmentSystem.twoHundredTwenty')}</li>
          )}
          {entertainmentSystem.carPlay && (
            <li>{t('advertPage:options.entertainmentSystem.carPlay')}</li>
          )}
          {entertainmentSystem.aux && <li>{t('advertPage:options.entertainmentSystem.aux')}</li>}
          {entertainmentSystem.usb && <li>{t('advertPage:options.entertainmentSystem.usb')}</li>}
          {entertainmentSystem.voiceAssistant && (
            <li>{t('advertPage:options.entertainmentSystem.voiceAssistant')}</li>
          )}
          {entertainmentSystem.androidAuto && (
            <li>{t('advertPage:options.entertainmentSystem.androidAuto')}</li>
          )}
          {entertainmentSystem.bluetooth && (
            <li>{t('advertPage:options.entertainmentSystem.bluetooth')}</li>
          )}
        </ul>
      </Accordion>
    </div>
  );
};
