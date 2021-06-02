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
export type TransmitionType = 'Rear wheel drive' | 'All wheel drive (AWD)' | 'Front wheel drive';
export type Gearbox = 'Automatic' | 'Manual' | 'variable' | 'robot';

export type MiniCarObject = {
  name: string;
  year: number;
  engineType: EngineType;
  power: number;
  gearbox: Gearbox;
  carBody: CarBodyTypes;
  transmissionType: TransmitionType;
  mileage: number;
  state: CarState;
  price: number;
};
