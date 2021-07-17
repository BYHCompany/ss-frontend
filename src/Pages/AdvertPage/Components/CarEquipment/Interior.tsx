import { Accordion } from 'byh-components';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { Interior } from '../../../../GlobalTypes/advertTypes';
import {
  translateArrayOfSeats,
  translateInteriorColor,
  translateInteriorMaterial,
  translateSeats,
} from '../../../../services/carTranslators';
import { getInteriorOptions } from '../../../../Store/ducks/advert/advertSelector';

const InteriorOptions = () => {
  const interior: Interior | undefined = useSelector(getInteriorOptions);
  const { t } = useTranslation();
  if (!interior) {
    return null;
  }

  return (
    <Accordion width={770} title={t('advertPage:options.interior.label')}>
      <ul>
        <li>{`${t('advertPage:options.interior.seatCount')} : ${interior.seatCount}`}</li>
        <li>{`${t(
          'advertPage:options.interior.interiorMaterial.label',
        )} : ${translateInteriorMaterial(interior.interiorMaterial)}`}</li>
        <li>
          {`${t('advertPage:options.interior.interiorColor.label')}:
          ${translateInteriorColor(interior.interiorColor)}
          `}
        </li>
        <li>
          {`${t('advertPage:options.interior.setsHeightRegulation')} :
          ${translateSeats(interior.setsHeightRegulation)} `}
        </li>
        {interior.electricSeatRegulation &&
          translateArrayOfSeats(interior.electricSeatRegulation).map((e) => (
            <li key={e}> {`${t('advertPage:options.interior.electricSeatRegulation')} : ${e}`} </li>
          ))}

        {interior.seatMemory &&
          translateArrayOfSeats(interior.seatMemory).map((e) => (
            <li key={e}> {`${t('advertPage:options.interior.seatMemory')} : ${e}`} </li>
          ))}

        <li>
          {`${t('advertPage:options.interior.lumbarSupport')} :
          ${translateSeats(interior.lumbarSupport)} `}
        </li>

        {interior.seatsVent &&
          translateArrayOfSeats(interior.seatsVent).map((e) => (
            <li key={e}> {`${t('advertPage:options.interior.seatsVent')} : ${e}`} </li>
          ))}
        {interior.sportFrontSeats && <li>{t('advertPage:options.interior.sportFrontSeats')}</li>}

        {interior.massageSeats && <li>{t('advertPage:options.interior.massageSeats')}</li>}

        {interior.steeringWheelHeat && (
          <li>{t('advertPage:options.interior.steeringWheelHeat')}</li>
        )}

        {interior.leatherSteeringWheel && (
          <li>{t('advertPage:options.interior.leatherSteeringWheel')}</li>
        )}

        {interior.gearboxLeather && <li>{t('advertPage:options.interior.gearboxLeather')}</li>}

        {interior.sunroof && <li>{t('advertPage:options.interior.sunroof')}</li>}

        {interior.panoramicView && <li>{t('advertPage:options.interior.panoramicView')}</li>}

        {interior.blackRoof && <li>{t('advertPage:options.interior.blackRoof')}</li>}

        {interior.frontArmrest && <li>{t('advertPage:options.interior.frontArmrest')}</li>}

        {interior.rearArmrest && <li>{t('advertPage:options.interior.rearArmrest')}</li>}

        {interior.thirdSeatsRow && <li>{t('advertPage:options.interior.thirdSeatsRow')}</li>}

        {interior.foldBackSeats && <li>{t('advertPage:options.interior.foldBackSeats')}</li>}

        {interior.foldRearBack && <li>{t('advertPage:options.interior.foldRearBack')}</li>}

        {interior.rearTableOnFrontSeats && (
          <li>{t('advertPage:options.interior.rearTableOnFrontSeats')}</li>
        )}
        {interior.tintedGlass && <li>{t('advertPage:options.interior.tintedGlass')}</li>}

        {interior.rearSunBlinds && <li>{t('advertPage:options.interior.rearSunBlinds')}</li>}
        {interior.rearWindowSunblind && (
          <li>{t('advertPage:options.interior.rearWindowSunblind')}</li>
        )}

        {interior.ambientLight && <li>{t('advertPage:options.interior.ambientLight')}</li>}

        {interior.decorativePedals && <li>{t('advertPage:options.interior.decorativePedals')}</li>}
        {interior.doorSills && <li>{t('advertPage:options.interior.doorSills')}</li>}
      </ul>
    </Accordion>
  );
};

export { InteriorOptions };
