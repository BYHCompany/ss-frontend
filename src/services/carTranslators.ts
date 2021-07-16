import { Heat, Lights } from '../GlobalTypes/advertTypes';
import {
  CarBodyTypes,
  CarState,
  EngineType,
  Gearbox,
  SteeringWheelPos,
  TransmissionType,
} from '../GlobalTypes/carTypes';
import i18n from '../i18n';

//This fn translates engine type to normal users language
export const translateEngineType = (engineType: EngineType) => {
  switch (engineType) {
    case 'diesel':
      return i18n.t('advertPage:engine.engineType.Diesel');
    case 'gasoline':
      return i18n.t('advertPage:engine.engineType.Gasoline');
    case 'hybrid':
      return i18n.t('advertPage:engine.engineType.Hybrid');
    case 'electric':
      return i18n.t('advertPage:engine.engineType.Electric');
    case 'hydrogen':
      return i18n.t('advertPage:engine.engineType.hydrogen');
  }
};

//This fn translates gearbox type to normal users language
export const translateGearboxType = (gearbox: Gearbox) => {
  switch (gearbox) {
    case 'automatic':
      return i18n.t('advertPage:gearBox.value.Automatic');
    case 'manual':
      return i18n.t('advertPage:gearBox.value.Manual');
    case 'robot':
      return i18n.t('advertPage:gearBox.value.robot');
    case 'variable':
      return i18n.t('advertPage:gearBox.value.variable');
  }
};

//This fn translates car body type to normal users language
export const translateBodyType = (carBody: CarBodyTypes) => {
  switch (carBody) {
    case 'sedan':
      return i18n.t('advertPage:carBody.carBodyTypes.sedan');
    case 'convertible':
      return i18n.t('advertPage:carBody.carBodyTypes.convertible');
    case 'coupe':
      return i18n.t('advertPage:carBody.carBodyTypes.coupe');
    case 'minivan':
      return i18n.t('advertPage:carBody.carBodyTypes.minivan');
    case 'sportCar':
      return i18n.t('advertPage:carBody.carBodyTypes.sportCar');
    case 'suv':
      return i18n.t('advertPage:carBody.carBodyTypes.suv');
    case 'wagon':
      return i18n.t('advertPage:carBody.carBodyTypes.wagon');
    case 'pickup':
      return i18n.t('advertPage:carBody.carBodyTypes.pickup');
    case 'hatchback':
      return i18n.t('advertPage:carBody.carBodyTypes.hatchback');
  }
};

//This fn translates engine type to normal users language
export const translateStateType = (state: CarState) => {
  switch (state) {
    case 'new':
      return 'Новый';
    case 'used':
      return 'Б/У';
  }
};

//This fn translates transmision type to normal users language
export const translateTransmitionType = (transmition: TransmissionType) => {
  switch (transmition) {
    case 'RWD':
      return i18n.t('advertPage:transmission.value.RWD');
    case 'FWD':
      return i18n.t('advertPage:transmission.value.FWD');
    case 'AWD':
      return i18n.t('advertPage:transmission.value.AWD');
  }
};
//This fn translates transmision type to normal users language
export const translateSteeringWheel = (steeringWheel: SteeringWheelPos) => {
  switch (steeringWheel) {
    case 'left':
      return i18n.t('advertPage:steeringWheel.value.left');
    case 'right':
      return i18n.t('advertPage:steeringWheel.value.right');
  }
};

export const translateLights = (lights: Lights) => {
  switch (lights) {
    case 'laser':
      return i18n.t('advertPage:options.overview.lights.laser');
    case 'xenon':
      return i18n.t('advertPage:options.overview.lights.xenon');
    case 'led':
      return i18n.t('advertPage:options.overview.lights.led');
  }
};
export const translateHeats = (heats: Heat[]) => {
  const resArr = [];
  for (let i = 0; i < heats.length; i++) {
    switch (heats[i]) {
      case 'windshield':
        resArr.push(i18n.t('advertPage:options.overview.heats.windshield'));
        break;
      case 'washerNozzles':
        resArr.push(i18n.t('advertPage:options.overview.heats.washerNozzles'));
        break;
      case 'wiperZones':
        resArr.push(i18n.t('advertPage:options.overview.heats.wiperZones'));
        break;
      case 'sideMirrors':
        resArr.push(i18n.t('advertPage:options.overview.heats.sideMirrors'));
        break;
    }
  }
};

export const booleanCarOptions = (isValue: boolean, translation: string) => {
  if (isValue) return translation;
};
