import { useTranslation } from 'react-i18next';
import {
  CarBodyTypes,
  CarState,
  EngineType,
  Gearbox,
  SteeringWheelPos,
  TransmitionType,
} from '../GlobalTypes/carTypes';
import i18n from '../i18n';

//This fn translates engine type to normal users language
export const translateEngineType = (engineType: EngineType) => {
  switch (engineType) {
    case 'Diesel':
      return i18n.t('advertPage:engine.engineType.Diesel');
    case 'Gasoline':
      return i18n.t('advertPage:engine.engineType.Gasoline');
    case 'Hybrid':
      return i18n.t('advertPage:engine.engineType.Hybrid');
    case 'Electric':
      return i18n.t('advertPage:engine.engineType.Electric');
    case 'hydrogen':
      return i18n.t('advertPage:engine.engineType.hydrogen');
  }
};

//This fn translates gearbox type to normal users language
export const translateGearboxType = (gearbox: Gearbox) => {
  switch (gearbox) {
    case 'Automatic':
      return i18n.t('advertPage:gearBox.value.Automatic');
    case 'Manual':
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
    case 'New':
      return 'Новый';
    case 'Used':
      return 'Б/У';
  }
};

//This fn translates transmision type to normal users language
export const translateTransmitionType = (transmition: TransmitionType) => {
  switch (transmition) {
    case 'Rear wheel drive':
      return i18n.t('advertPage:transmission.value.RWD');
    case 'Front wheel drive':
      return i18n.t('advertPage:transmission.value.FWD');
    case 'All wheel drive (AWD)':
      return i18n.t('advertPage:transmission.value.AWD');
  }
};
//This fn translates transmision type to normal users language
export const translateSteeringWheel = (steeringWheel: SteeringWheelPos) => {
  switch (steeringWheel) {
    case 'Left':
      return i18n.t('advertPage:steeringWheel.value.left');
    case 'Right':
      return i18n.t('advertPage:steeringWheel.value.right');
  }
};
