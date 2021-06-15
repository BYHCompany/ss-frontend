import { Car } from './carTypes';

export type Boosts = 'free' | 'strong' | 'powerful';
export type VehicleType = 'car' | 'motocycle' | 'specialTransport';
export type State = 'new' | 'used';
export type VehiclePassport = 'original' | 'copy';

export type Advert = {
  id: string;
  ownerId: string;
  boosts: Boosts;
  item: Car;
};

type Lights = 'xenon' | 'laser' | 'led';
type Heat = 'windshield' | 'sideMirrors' | 'washerNozzles' | 'wiperZones' | 'all';
export type Overview = {
  lights: Lights;
  heat: Heat;
  dayLights: boolean;
  fogLights: boolean;
  headLightsControl: boolean;
  headlightWasher: boolean;
  adaptiveLights: boolean;
  rainControl: boolean;
  lightSensor: boolean;
  autoBeam: boolean;
};
type Rims = 'alloy' | 'stamped';
export type Exterior = {
  rimsType: Rims;
  rimsSize: number;
  twoBodyColors: boolean;
  airbrush: boolean;
  decorateMoldings: boolean;
  roofRails: boolean;
};

type Signaling = 'default' | 'advanced';
export type AntiTheftProtection = {
  signaling: Signaling;
  centralLock: boolean;
  interiorPenetration: boolean;
  immobilizer: boolean;
};
type AudioSystem = 'premium' | 'default' | 'audioPreparation';
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

type InteriorMaterial = 'leather' | 'velours' | 'alcantara' | 'cloth' | 'syntheticCloth';
type AllSeats = 'driverSeat' | 'frontSeats' | 'backSeats';
type MainSeats = 'driverSeat' | 'frontSeats';
export type Interior = {
  seatCount: number;
  interiorMaterial: InteriorMaterial;
  interiorColor: string;
  setsHeightRegulation: MainSeats;
  electricSeatRegulation: AllSeats;
  seatMemory: AllSeats;
  lumbarSupport: MainSeats;
  seatsHeat: AllSeats;
  seatsVent: AllSeats;
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

type PowerWindows = 'all' | 'front' | 'back';
type AirConditioning = 'oneZone' | 'twoZone' | 'multiZone';
type PowerSteering = 'active' | 'powerSteering';
type ParkingAssistant = 'allParktronics' | 'front' | 'back';
type Camera = '360' | 'front' | 'back';
export type Comfort = {
  powerWindows: PowerWindows;
  airConditioning: AirConditioning;
  powerSteering: PowerSteering;
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

type Airbags = 'all' | 'driver' | 'passenger' | 'frontSideBags' | 'backSideBags' | 'windowBags';
type Isofix = 'front' | 'back' | 'all';
type SupportSystems =
  | 'all'
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
  airbags: Airbags;
  isofix: Isofix;
  supportSystems: SupportSystems;
  abs: boolean;
  esp: boolean;
  peassureSensor: boolean;
  rearDoorBlock: boolean;
  armoredBody: boolean;
};

type SpareWheel = 'donutWheel' | 'miniSpare';
type Suspention = 'pneumatic' | 'spring';
export type Other = {
  suspention: Suspention;
  spareWheel: SpareWheel;
  towbar: boolean;
  crankcaseProtection: boolean;
};
