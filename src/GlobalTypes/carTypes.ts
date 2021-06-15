import {
  AntiTheftProtection,
  Comfort,
  EntertainmentSystem,
  Exterior,
  Interior,
  Other,
  Overview,
  Safety,
  State,
  VehiclePassport,
  VehicleType,
} from './advertTypes';

export type CarBodyTypes =
  | 'sedan'
  | 'coupe'
  | 'sportCar'
  | 'wagon'
  | 'hatchback'
  | 'convertible'
  | 'suv'
  | 'minivan'
  | 'pickup';

export type EngineType = 'Gasoline' | 'Diesel' | 'Electric' | 'hydrogen' | 'Hybrid';
export type CarState = 'Used' | 'New';
export type TransmissionType = 'RWD' | 'AWD' | 'FWD';
export type Gearbox = 'Automatic' | 'Manual' | 'variable' | 'robot';
export type SteeringWheelPos = 'Left' | 'Right';

export type AdvertInfoProps = {
  price: number;
  year: number;
  millage: number;
  transmissionType: TransmissionType;
  steeringWheel: SteeringWheelPos;
  engineType: EngineType;
  gearbox: Gearbox;
  power: number;
  carBody: CarBodyTypes;
  state: CarState;
  tax: number;
  vinCode: string;
  carLicensePlate: string;
};

export type MiniCarObject = {
  name: string;
  year: number;
  engineType: EngineType;
  power: number;
  gearbox: Gearbox;
  carBody: CarBodyTypes;
  transmissionType: TransmissionType;
  mileage: number;
  state: CarState;
  price: number;
  steeringWheel: SteeringWheelPos;
};
export type Car = {
  type: VehicleType;
  make: string;
  model: string;
  gen: string;
  modification: string;
  year: number;
  millage: string;
  transmission: TransmissionType;
  steeringWheel: SteeringWheelPos;
  engineType: EngineType;
  gasEquip: boolean;
  gearbox: Gearbox;
  power: number;
  complect: string;
  carBody: CarBodyTypes;
  state: State;
  tax: number;
  vin: string;
  carLicensePlate: string;
  comment: string;
  price: number;
  color: string;
  vehiclePassport: VehiclePassport;
  ownersCount: number;
  buyDate: string;
  warranty: string;
  TI: string;
  photo: string[];
  video: string;
  options: {
    overview: Overview;
    exterior: Exterior;
    antiTheftProtection: AntiTheftProtection;
    entertainmentSystem: EntertainmentSystem;
    interior: Interior;
    comfort: Comfort;
    safety: Safety;
    other: Other;
  };
  publishInfo: {
    city: string;
    phone: string;
    options: {
      dontShowLastName: boolean;
      dontShowAvatar: boolean;
    };
  };
};
