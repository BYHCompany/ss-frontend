import { Car, MediumCar } from './carTypes';

export type Boosts = 'free' | 'strong' | 'powerful';
export type VehicleType = 'car' | 'motocycle' | 'specialTransport';
export type State = 'new' | 'used';
export type VehiclePassport = 'original' | 'copy';
export type UserData = {
  firstName: string;
  lastName: string;
  bd: string;
  phone: string;
  email: string;
  avatarURL: string;
};
export type Advert = {
  id: string | null;
  ownerID: string | null;
  boosts: Boosts[] | null;
  item: Car | null;
  owner: UserData | null;
};
export type MediumAdvert = {
  id: string | null;
  ownerID: string | null;
  boosts: Boosts[] | null;
  item: MediumCar | null;
};

/**
 * It's for Profile advert array
 */
export type AdvertWithoutCar = {
  id: number;
  ownerID: number;
  boosts: Boosts[];
};

export type Lights = 'xenon' | 'laser' | 'led';
export type Heat = 'windshield' | 'sideMirrors' | 'washerNozzles' | 'wiperZones';
export type Overview = {
  lights: Lights;
  heat: Heat[];
  dayLights: boolean;
  fogLights: boolean;
  headLightsControl: boolean;
  headlightWasher: boolean;
  adaptiveLights: boolean;
  rainControl: boolean;
  lightSensor: boolean;
  autoBeam: boolean;
};
export type Rims = 'alloy' | 'stamped';
export type Exterior = {
  rimsType: Rims;
  rimsSize: number;
  twoBodyColors: boolean;
  airbrush: boolean;
  decorateMoldings: boolean;
  roofRails: boolean;
};

export type Signaling = 'default' | 'advanced';
export type AntiTheftProtection = {
  signaling: Signaling;
  centralLock: boolean;
  interiorPenetration: boolean;
  immobilizer: boolean;
};
export type AudioSystem = 'premium' | 'default' | 'audioPreparation';
export type EntertainmentSystem = {
  audioSystem: AudioSystem;
  navi: boolean;
  backSeatsSystem: boolean;
  wirelessCharging: boolean;
  twelveVPlug: boolean;
  twoHundredTwenty: boolean;
  carPlay: boolean;
  aux: boolean;
  usb: boolean;
  voiceAssistant: boolean;
  androidAuto: boolean;
  bluetooth: boolean;
};

export type InteriorMaterial = 'leather' | 'velours' | 'alcantara' | 'cloth' | 'syntheticCloth';
export type AllSeats = 'driver' | 'front' | 'back';
export type MainSeats = 'driver' | 'front';
export type InteriorColor = 'light' | 'dark';
export type Interior = {
  seatCount: number;
  interiorMaterial: InteriorMaterial;
  interiorColor: InteriorColor;
  setsHeightRegulation: MainSeats;
  electricSeatRegulation: AllSeats[];
  seatMemory: AllSeats[];
  lumbarSupport: MainSeats;
  seatsHeat: AllSeats[];
  seatsVent: AllSeats[];
  sportFrontSeats: boolean;
  massageSeats: boolean;
  steeringWheelHeat: boolean;
  leatherSteeringWheel: boolean;
  gearboxLeather: boolean;
  sunroof: boolean;
  panoramicView: boolean;
  blackRoof: boolean;
  frontArmrest: boolean;
  rearArmrest: boolean;
  thirdSeatsRow: boolean;
  foldBackSeats: boolean;
  foldRearBack: boolean;
  rearTableOnFrontSeats: boolean;
  tintedGlass: boolean;
  rearSunBlinds: boolean;
  rearWindowSunblind: boolean;
  ambientLight: boolean;
  decorativePedals: boolean;
  doorSills: boolean;
};

export type PowerWindows = 'front' | 'back';
export type AirConditioning = 'oneZone' | 'twoZone' | 'multiZone';
export type PowerSteering = 'active' | 'default';
export type CruiseControl = 'active' | 'default' | 'null';
export type ParkingAssistant = 'allParktronics' | 'front' | 'back' | 'null';
export type Camera = '360' | 'front' | 'back' | 'null';
export type Comfort = {
  powerWindows: PowerWindows[];
  airConditioning: AirConditioning;
  powerSteering: PowerSteering;
  cruiseControl: CruiseControl;
  parkingAssistant: ParkingAssistant;
  camera: Camera;
  headUpDisplay: boolean;
  driveModeSelection: boolean;
  keylessSys: boolean;
  remoteEngineStart: boolean;
  startStop: boolean;
  buttonEngineStart: boolean;
  programmablePreHeater: boolean;
  trunkLidDrive: boolean;
  electricMirrors: boolean;
  electroFolderingMirrors: boolean;
  multiSteeringWheel: boolean;
  paddleShifters: boolean;
  cooledGloveBox: boolean;
  adjustablePedalAssembly: boolean;
  doorCloser: boolean;
  ashtray: boolean;
  trunkWithoutHands: boolean;
};

export type Airbags = 'driver' | 'passenger' | 'frontSideBags' | 'backSideBags' | 'windowBags';
export type Isofix = 'front' | 'back';
export type SupportSystems =
  | 'antiСollision'
  | 'laneControl'
  | 'driverFatigueSensor'
  | 'roadSignRecognition'
  | 'ASR'
  | 'VSM'
  | 'BAS'
  | 'helpAtStartUp'
  | 'blindSpotControl'
  | 'nightVision';
export type Safety = {
  airbags: Airbags[];
  isofix: Isofix[];
  supportSystems: SupportSystems[];
  abs: boolean;
  esp: boolean;
  peassureSensor: boolean;
  rearDoorBlock: boolean;
  armoredBody: boolean;
};

export type SpareWheel = 'donutWheel' | 'miniSpare' | 'repair';
export type Suspention = 'pneumatic' | 'spring';
export type Other = {
  suspention: Suspention;
  spareWheel: SpareWheel;
  towbar: boolean;
  crankcaseProtection: boolean;
};
