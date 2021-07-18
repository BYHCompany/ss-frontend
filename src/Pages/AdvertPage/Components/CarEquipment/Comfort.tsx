import { Accordion } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import {
  translateAirConditioning,
  translateCamera,
  translateCruiseControl,
  translateParkingAssistant,
  translatePowerSteering,
  translatePowerWindows,
} from '../../../../services/carTranslators';
import { getComfortOptions } from '../../../../Store/ducks/advert/advertSelector';

export const Comfort = () => {
  const { t } = useTranslation();
  const comfort = useSelector(getComfortOptions);

  if (!comfort) {
    return null;
  }
  return (
    <div>
      <Accordion width={770} title={t('advertPage:options.comfort.label')}>
        <ul>
          {comfort.powerWindows &&
            translatePowerWindows(comfort.powerWindows).map((e) => <li key={e}>{e} </li>)}
          <li>{comfort.airConditioning && translateAirConditioning(comfort.airConditioning)}</li>
          <li>{comfort.powerSteering && translatePowerSteering(comfort.powerSteering)}</li>
          <li>{comfort.cruiseControl && translateCruiseControl(comfort.cruiseControl)}</li>
          <li>{comfort.parkingAssistant && translateParkingAssistant(comfort.parkingAssistant)}</li>
          <li>{comfort.camera && translateCamera(comfort.camera)}</li>
          {comfort.headUpDisplay && <li>{t('advertPage:options.comfort.headUpDisplay')}</li>}
          {comfort.driveModeSelection && (
            <li>{t('advertPage:options.comfort.driveModeSelection')}</li>
          )}
          {comfort.keylessSys && <li>{t('advertPage:options.comfort.keylessSys')}</li>}
          {comfort.remoteEngineStart && (
            <li>{t('advertPage:options.comfort.remoteEngineStart')}</li>
          )}
          {comfort.startStop && <li>{t('advertPage:options.comfort.startStop')}</li>}
          {comfort.buttonEngineStart && (
            <li>{t('advertPage:options.comfort.buttonEngineStart')}</li>
          )}
          {comfort.programmablePreHeater && (
            <li>{t('advertPage:options.comfort.programmablePreHeater')}</li>
          )}
          {comfort.trunkLidDrive && <li>{t('advertPage:options.comfort.trunkLidDrive')}</li>}
          {comfort.electricMirrors && <li>{t('advertPage:options.comfort.electricMirrors')}</li>}
          {comfort.electroFolderingMirrors && (
            <li>{t('advertPage:options.comfort.electroFolderingMirrors')}</li>
          )}
          {comfort.multiSteeringWheel && (
            <li>{t('advertPage:options.comfort.multiSteeringWheel')}</li>
          )}
          {comfort.paddleShifters && <li>{t('advertPage:options.comfort.paddleShifters')}</li>}
          {comfort.cooledGloveBox && <li>{t('advertPage:options.comfort.cooledGloveBox')}</li>}
          {comfort.adjustablePedalAssembly && (
            <li>{t('advertPage:options.comfort.adjustablePedalAssembly')}</li>
          )}
          {comfort.doorCloser && <li>{t('advertPage:options.comfort.doorCloser')}</li>}
          {comfort.ashtray && <li>{t('advertPage:options.comfort.ashtray')}</li>}
          {comfort.trunkWithoutHands && (
            <li>{t('advertPage:options.comfort.trunkWithoutHands')}</li>
          )}
        </ul>
      </Accordion>
    </div>
  );
};
