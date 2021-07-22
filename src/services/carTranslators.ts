import {
  Airbags,
  AirConditioning,
  AllSeats,
  AudioSystem,
  Camera,
  CruiseControl,
  Heat,
  InteriorColor,
  InteriorMaterial,
  Isofix,
  Lights,
  ParkingAssistant,
  PowerSteering,
  PowerWindows,
  Rims,
  Signaling,
  SpareWheel,
  SupportSystems,
  Suspention,
} from '../GlobalTypes/advertTypes';
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
    case 'compact':
      return i18n.t('advertPage:carBody.carBodyTypes.compact');
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
//OVERVIEW TRANSLATION
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
  return resArr;
};

//Interior TRANSLATION
export const translateInteriorMaterial = (interiorMaterial: InteriorMaterial) => {
  switch (interiorMaterial) {
    case 'alcantara':
      return i18n.t('advertPage:options.interior.interiorMaterial.alcantara');
    case 'cloth':
      return i18n.t('advertPage:options.interior.interiorMaterial.cloth');
    case 'leather':
      return i18n.t('advertPage:options.interior.interiorMaterial.leather');
    case 'syntheticCloth':
      return i18n.t('advertPage:options.interior.interiorMaterial.syntheticCloth');
    case 'velours':
      return i18n.t('advertPage:options.interior.interiorMaterial.velours');
  }
};
export const translateSeats = (seats: AllSeats) => {
  switch (seats) {
    case 'back':
      return i18n.t('advertPage:options.interior.backSeats');
    case 'driver':
      return i18n.t('advertPage:options.interior.driverSeat');
    case 'front':
      return i18n.t('advertPage:options.interior.frontSeats');
  }
};
export const translateArrayOfSeats = (seats: AllSeats[]) => {
  const arr = [];
  for (let i = 0; i < seats.length; i++) {
    switch (seats[i]) {
      case 'back':
        arr.push(i18n.t('advertPage:options.interior.backSeats'));
        continue;
      case 'driver':
        arr.push(i18n.t('advertPage:options.interior.driverSeat'));
        continue;
      case 'front':
        arr.push(i18n.t('advertPage:options.interior.frontSeats'));
        break;
    }
  }
  return arr;
};
export const translateInteriorColor = (seats: InteriorColor) => {
  switch (seats) {
    case 'dark':
      return i18n.t('advertPage:options.interior.interiorColor.dark');
    case 'light':
      return i18n.t('advertPage:options.interior.interiorColor.light');
    default:
      return i18n.t('advertPage:options.interior.interiorColor.dark');
  }
};
//exterior TRANSLATION
export const translateRimsType = (rims: Rims) => {
  switch (rims) {
    case 'alloy':
      return i18n.t('advertPage:options.exterior.rimsType.alloy');
    case 'stamped':
      return i18n.t('advertPage:options.exterior.rimsType.stamped');
  }
};
//antiTheftProtection TRANSLATION
export const translateSignaling = (signal: Signaling) => {
  switch (signal) {
    case 'default':
      return i18n.t('advertPage:options.antiTheftProtection.signaling.default');
    case 'advanced':
      return i18n.t('advertPage:options.antiTheftProtection.signaling.advanced');
  }
};
//entertainmentSystem TRANSLATION
export const translateAudioSystem = (audio: AudioSystem) => {
  switch (audio) {
    case 'default':
      return i18n.t('advertPage:options.entertainmentSystem.audioSystem.default');
    case 'premium':
      return i18n.t('advertPage:options.entertainmentSystem.audioSystem.premium');
    case 'audioPreparation':
      return i18n.t('advertPage:options.entertainmentSystem.audioSystem.audioPreparation');
  }
};
//Safety TRANSLATION
export const translateAirbags = (airbags: Airbags[]) => {
  const arr = [];
  for (let i = 0; i < airbags.length; i++) {
    switch (airbags[i]) {
      case 'backSideBags':
        arr.push(i18n.t('advertPage:options.safety.airbags.backSideBags'));
        break;
      case 'driver':
        arr.push(i18n.t('advertPage:options.safety.airbags.driver'));
        break;
      case 'frontSideBags':
        arr.push(i18n.t('advertPage:options.safety.airbags.frontSideBags'));
        break;
      case 'passenger':
        arr.push(i18n.t('advertPage:options.safety.airbags.passenger'));
        break;
      case 'windowBags':
        arr.push(i18n.t('advertPage:options.safety.airbags.windowBags'));
        break;
    }
  }

  return arr as string[];
};
export const translateIsofix = (isofix: Isofix[]) => {
  const arr = [];

  for (let i = 0; i < isofix.length; i++) {
    switch (isofix[i]) {
      case 'front':
        arr.push(i18n.t('advertPage:options.safety.isofix.front'));
        break;
      case 'back':
        arr.push(i18n.t('advertPage:options.safety.isofix.back'));
        break;
    }
  }
  return arr;
};

export const translateSupportSystems = (seats: SupportSystems[]) => {
  const arr = [];
  for (let i = 0; i < seats.length; i++) {
    switch (seats[i]) {
      case 'ASR':
        arr.push(i18n.t('advertPage:options.safety.supportSystems.ASR'));
        break;
      case 'BAS':
        arr.push(i18n.t('advertPage:options.safety.supportSystems.BAS'));
        break;
      case 'VSM':
        arr.push(i18n.t('advertPage:options.safety.supportSystems.VSM'));
        break;
      case 'antiСollision':
        arr.push(i18n.t('advertPage:options.safety.supportSystems.antiСollision'));
        break;
      case 'blindSpotControl':
        arr.push(i18n.t('advertPage:options.safety.supportSystems.blindSpotControl'));
        break;
      case 'driverFatigueSensor':
        arr.push(i18n.t('advertPage:options.safety.supportSystems.driverFatigueSensor'));
        break;
      case 'helpAtStartUp':
        arr.push(i18n.t('advertPage:options.safety.supportSystems.helpAtStartUp'));
        break;
      case 'laneControl':
        arr.push(i18n.t('advertPage:options.safety.supportSystems.laneControl'));
        break;
      case 'nightVision':
        arr.push(i18n.t('advertPage:options.safety.supportSystems.nightVision'));
        break;
      case 'roadSignRecognition':
        arr.push(i18n.t('advertPage:options.safety.supportSystems.roadSignRecognition'));
        break;
    }
  }
  return arr;
};
//Comfort TRANSLATION
export const translatePowerWindows = (powerWindows: PowerWindows[]) => {
  const arr = [];

  for (let i = 0; i < powerWindows.length; i++) {
    switch (powerWindows[i]) {
      case 'front':
        arr.push(i18n.t('advertPage:options.comfort.powerWindows.front'));
        break;
      case 'back':
        arr.push(i18n.t('advertPage:options.comfort.powerWindows.back'));
        break;
    }
  }
  return arr;
};

export const translateAirConditioning = (airConditioning: AirConditioning) => {
  switch (airConditioning) {
    case 'multiZone':
      return i18n.t('advertPage:options.comfort.airConditioning.multiZone');
    case 'twoZone':
      return i18n.t('advertPage:options.comfort.airConditioning.twoZone');
    case 'oneZone':
      return i18n.t('advertPage:options.comfort.airConditioning.oneZone');
  }
};
export const translatePowerSteering = (powerSteering: PowerSteering) => {
  switch (powerSteering) {
    case 'active':
      return i18n.t('advertPage:options.comfort.powerSteering.active');
    case 'default':
      return i18n.t('advertPage:options.comfort.powerSteering.default');
  }
};
export const translateCruiseControl = (cruiseControl: CruiseControl) => {
  switch (cruiseControl) {
    case 'active':
      return i18n.t('advertPage:options.comfort.cruiseControl.active');
    case 'default':
      return i18n.t('advertPage:options.comfort.cruiseControl.default');
    case 'null':
      return i18n.t('advertPage:options.comfort.cruiseControl.null');
  }
};
export const translateParkingAssistant = (parkingAssistant: ParkingAssistant) => {
  switch (parkingAssistant) {
    case 'allParktronics':
      return i18n.t('advertPage:options.comfort.parkingAssistant.allParktronics');
    case 'front':
      return i18n.t('advertPage:options.comfort.parkingAssistant.front');
    case 'back':
      return i18n.t('advertPage:options.comfort.parkingAssistant.back');
    case 'null':
      return i18n.t('advertPage:options.comfort.cruiseControl.null');
  }
};
export const translateCamera = (camera: Camera) => {
  switch (camera) {
    case '360':
      return i18n.t('advertPage:options.comfort.camera.360');
    case 'front':
      return i18n.t('advertPage:options.comfort.camera.front');
    case 'back':
      return i18n.t('advertPage:options.comfort.camera.back');
    case 'null':
      return i18n.t('advertPage:options.comfort.cruiseControl.null');
  }
};
//Other TRANSLATION

export const translateSpareWheel = (spareWheel: SpareWheel) => {
  switch (spareWheel) {
    case 'donutWheel':
      return i18n.t('advertPage:options.other.spareWheel.donutWheel');
    case 'miniSpare':
      return i18n.t('advertPage:options.other.spareWheel.miniSpare');
    case 'repair':
      return i18n.t('advertPage:options.other.spareWheel.repairKit');
    default:
      return i18n.t('advertPage:options.other.spareWheel.donutWheel');
  }
};
export const translateSuspention = (suspention: Suspention) => {
  switch (suspention) {
    case 'pneumatic':
      return i18n.t('advertPage:options.other.suspention.pneumatic');
    case 'spring':
      return i18n.t('advertPage:options.other.suspention.spring');
  }
};
